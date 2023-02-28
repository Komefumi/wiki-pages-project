import { IPageReference } from "./lib";

export interface I_ImageInsideItem {
  side: "left" | "right";
  src: string;
  /*
    Note: If referring text exists, it will be display after info text
    Unless info text does not exist.
  */
  infoText?: string;
  referringText?: IPageReference;
}

export interface IPageData {
  title: string;
  summary: string;
  pageItems: {
    mainArticle?: IPageReference;
    title: string;
    imageItem?: I_ImageInsideItem;
  }[];
  // pageItems:
  // pageItems:;
}
