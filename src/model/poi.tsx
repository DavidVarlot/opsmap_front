class POI {

    public id?: string;
    public nom?: string;
    public lat?: string;
    public lon?: string;

    constructor(nom?: string, id?: string, lat?: string, lon?: string) {
        this.id = id;
        this.nom = nom;
        this.lat = lat;
        this.lon = lon;
    }
}

export default POI;