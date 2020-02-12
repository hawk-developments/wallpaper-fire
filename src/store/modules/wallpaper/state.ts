export type Wallpaper = {
    id: number;
    path: string;
    title: string;
    description?: string;
    thumb: string | null;
    config: any;
};
export type WallpaperState = {
    current: Wallpaper | null;
    wallpapers: Wallpaper[]
};

const state: WallpaperState = {
    current: null,
    wallpapers: []
};

export default state;
