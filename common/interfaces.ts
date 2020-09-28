import { Document } from 'mongoose'

export interface ILandingAppState
{
    isLoading: boolean;
    moviesData: IMovie[];
}

export interface IDetailAppState
{
    isLoading: boolean;
    movieData: any;
}

export interface ISearchAppState
{
    isKeywordTyped: boolean;
    isLoading: boolean;
    moviesData: IMovie[];
}

export interface IMovie extends Document {
    title: string;
    plot: string;   
}

export interface IMovieDetail extends Document {
    title: string;
    plot: string;
    type: string;
    fullplot: string;
    year: number;
    cast: Array<string>;
    genres: Array<string>;
    directors: Array<string>;
    languages: Array<string>;
    countries: Array<string>;
    runtime: number;
    rated: string;
    imdb: IImdb
}

interface IImdb
{
    rating: number;
}