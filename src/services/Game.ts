export interface Game {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Rating[];
    ratings_count: number;
    reviews_text_count: number;
    added: number;
    added_by_status: AddedByStatus;
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    user_game: null;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    platforms: Platform[];
    parent_platforms: ParentPlatform[];
    genres: Genre[];
    stores: Store[];
    clip: null;
    tags: Tag[];
    esrb_rating: EsrbRating;
    short_screenshots: ShortScreenshot[];
}

interface Rating {
    id: number;
    title: string;
    count: number;
    percent: number;
}

interface AddedByStatus {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
}

interface Platform {
    platform: PlatformDetail;
    released_at: string;
    requirements_en: RequirementsEn | null;
    requirements_ru: null;
}

interface PlatformDetail {
    id: number;
    name: string;
    slug: string;
    image: null;
    year_end: null;
    year_start: null;
    games_count: number;
    image_background: string;
}

interface RequirementsEn {
    minimum: string;
    recommended: string;
}

interface ParentPlatform {
    platform: PlatformDetail;
}

interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

interface Store {
    id: number;
    store: StoreDetail;
}

interface StoreDetail {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
}

interface Tag {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
}

interface EsrbRating {
    id: number;
    name: string;
    slug: string;
}

interface ShortScreenshot {
    id: number;
    image: string;
}
