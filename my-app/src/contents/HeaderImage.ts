export interface IHeaderImage {
  heroImage: string;
  buttonImage: string;
  buttonImageSize: React.CSSProperties;
  buttonLink: string;
  trailer: boolean;
  movieHeader: boolean;
  style: React.CSSProperties;
}
export const HEADER_IMAGE_DATA = [
  {
    heroImage:
      "https://starz.imgix.net/homepage/images/killersgame-desktop.jpg?w=1000&fit=max&auto=format,compress",
    buttonImage:
      "https://starz.imgix.net/homepage/ta/killersgame-ta.png?w=600&fm=png&auto=compress,format",
    buttonImageSize: {
      width: "478px",
      height: "269px",
    },
    buttonLink: "",
    trailer: true,
    movieHeader: false,

    style: {},
  },
  {
    heroImage:
      "https://starz.imgix.net/homepage/images/killersgame-desktop.jpg?w=1000&fit=max&auto=format,compress",
    buttonImage:
      "https://starz.imgix.net/homepage/ta/3for3offer-glint-ta.png?w=600&fm=png&auto=compress,format",
    buttonImageSize: {
      width: "546px",
      height: "401px",
    },
    buttonLink: "",
    trailer: false,
    movieHeader: false,
    style: {},
  },
  {
    heroImage:
      "https://starz.imgix.net/homepage/images/killersgame-desktop.jpg?w=1000&fit=max&auto=format,compress",
    buttonImage:
      "https://starz.imgix.net/homepage/ta/cnd1-ta.png?w=600&fm=png&auto=compress,f",
    buttonImageSize: {
      width: "410px",
      height: "101px",
    },
    buttonLink: "",
    trailer: true,
    movieHeader: true,
    style: {},
  },
  {
    heroImage:
      "https://starz.imgix.net/homepage/images/killersgame-desktop.jpg?w=1000&fit=max&auto=format,compress",
    buttonImage:
      "https://starz.imgix.net/homepage/ta/greedypeople-ta.png?w=600&fm=png&auto=compress,format",
    buttonImageSize: {
      width: "410px",
      height: "184px",
    },
    buttonLink: "",
    trailer: true,
    movieHeader: false,
    style: {},
  },
  {
    heroImage:
      "https://starz.imgix.net/homepage/images/killersgame-desktop.jpg?w=1000&fit=max&auto=format,compress",
    buttonImage:
      "https://starz.imgix.net/homepage/ta/pbk4-2line-ta.png?w=600&fm=png&auto=compress,format",
    buttonImageSize: {
      width: "546px",
      height: "106px",
    },
    buttonLink: "",
    trailer: true,
    movieHeader: true,
    style: {},
  },
  {
    heroImage:
      "https://starz.imgix.net/homepage/images/killersgame-desktop.jpg?w=1000&fit=max&auto=format,compress",
    buttonImage:
      "https://starz.imgix.net/homepage/ta/fastx-ta.png?w=600&fm=png&auto=compress,format",
    buttonImageSize: {
      width: "410px",
      height: "231px",
    },
    buttonLink: "",
    trailer: true,
    movieHeader: false,
    style: {},
  },
];
