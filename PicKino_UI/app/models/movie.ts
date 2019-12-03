export class Movie {
  constructor(
    public id: string,
    public name: string,
    public rating: string,
    public description: string,
    public cast: string,
    public emailid: string,
    public releaseDate: string,
    public imageLink1: string,
    public imageLink2: string,
    public imageLink3: string,
    public type: string,
    public genreLanguage: string
  ) {}
}
