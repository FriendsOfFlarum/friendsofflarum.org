import localforage from "localforage";
import dayjs from "dayjs";
import "whatwg-fetch";

class Extensions {
  init() {
    localforage.config({
      name: "FriendsOfFlarum",
      description: "FriendsOfFlarum",
      driver: [
        localforage.INDEXEDDB,
        localforage.WEBSQL,
        localforage.LOCALSTORAGE
      ]
    });
  }

  async list() {
    const saved = await this.getCached("extensions", "day");

    if (saved) return saved;

    const res = await fetch(
      `https://packagist.org/search.json?type=flarum-extension&q=fof&per_page=100`
    );

    if (res.status >= 400) return null;

    let { results } = await res.json();

    results = results.filter(e => e.name.startsWith("fof/"));

    await this.setCache("extensions", results);

    return results;
  }

  async get(name) {
    const key = `extensions[${name}]`;

    const saved = await this.getCached(key, "week");

    if (saved) return saved;

    const res = await fetch(`https://repo.packagist.org/p/${name}.json`, {
      method: "GET"
    });

    if (res.status >= 400) return null;

    const { packages } = await res.json();
    const pkg = packages[name];
    const info = pkg["dev-master"];

    await this.setCache(key, info);

    return info;
  }

  async getCached(key, time) {
    const lastUpdated = await localforage.getItem(`${key}.updated`);

    if (
      lastUpdated &&
      !dayjs(lastUpdated).isBefore(dayjs().subtract(1, time))
    ) {
      try {
        return JSON.parse(await localforage.getItem(key));
      } catch (err) {
        //
      }
    }
  }

  async setCache(key, data) {
    await localforage.setItem(key, JSON.stringify(data));
    await localforage.setItem(`${key}.updated`, Date.now());
  }
}

export default new Extensions();
