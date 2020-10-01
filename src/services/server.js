export default class WorkWithApi {
    url = "http://hp-api.herokuapp.com/api/characters/";
    async request() {
        let responce = await fetch(this.url);
        let result = await responce.json();
        return result[Math.floor(Math.random() * result.length)];
    }
}