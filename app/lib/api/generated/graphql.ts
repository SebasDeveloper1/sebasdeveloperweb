export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  personalInformationCollection?: Maybe<PersonalInformationCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPersonalInformationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** job experience  with start date, end date, name company, job title, description [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/jobExperience) */
export type JobExperience = Entry & {
  __typename?: 'JobExperience';
  companyName?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<JobExperienceDescription>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  link?: Maybe<JobExperienceLink>;
  linkedFrom?: Maybe<JobExperienceLinkingCollections>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  sys: Sys;
};


/** job experience  with start date, end date, name company, job title, description [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/jobExperience) */
export type JobExperienceCompanyNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** job experience  with start date, end date, name company, job title, description [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/jobExperience) */
export type JobExperienceDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** job experience  with start date, end date, name company, job title, description [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/jobExperience) */
export type JobExperienceEndDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** job experience  with start date, end date, name company, job title, description [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/jobExperience) */
export type JobExperienceJobTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** job experience  with start date, end date, name company, job title, description [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/jobExperience) */
export type JobExperienceLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** job experience  with start date, end date, name company, job title, description [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/jobExperience) */
export type JobExperienceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** job experience  with start date, end date, name company, job title, description [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/jobExperience) */
export type JobExperienceStartDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type JobExperienceCollection = {
  __typename?: 'JobExperienceCollection';
  items: Array<Maybe<JobExperience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type JobExperienceDescription = {
  __typename?: 'JobExperienceDescription';
  json: Scalars['JSON']['output'];
  links: JobExperienceDescriptionLinks;
};

export type JobExperienceDescriptionAssets = {
  __typename?: 'JobExperienceDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type JobExperienceDescriptionEntries = {
  __typename?: 'JobExperienceDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type JobExperienceDescriptionLinks = {
  __typename?: 'JobExperienceDescriptionLinks';
  assets: JobExperienceDescriptionAssets;
  entries: JobExperienceDescriptionEntries;
  resources: JobExperienceDescriptionResources;
};

export type JobExperienceDescriptionResources = {
  __typename?: 'JobExperienceDescriptionResources';
  block: Array<JobExperienceDescriptionResourcesBlock>;
  hyperlink: Array<JobExperienceDescriptionResourcesHyperlink>;
  inline: Array<JobExperienceDescriptionResourcesInline>;
};

export type JobExperienceDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'JobExperienceDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type JobExperienceDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'JobExperienceDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type JobExperienceDescriptionResourcesInline = ResourceLink & {
  __typename?: 'JobExperienceDescriptionResourcesInline';
  sys: ResourceSys;
};

export type JobExperienceFilter = {
  AND?: InputMaybe<Array<InputMaybe<JobExperienceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<JobExperienceFilter>>>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyName_contains?: InputMaybe<Scalars['String']['input']>;
  companyName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  companyName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  companyName_not?: InputMaybe<Scalars['String']['input']>;
  companyName_not_contains?: InputMaybe<Scalars['String']['input']>;
  companyName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  jobTitle_contains?: InputMaybe<Scalars['String']['input']>;
  jobTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  jobTitle_not?: InputMaybe<Scalars['String']['input']>;
  jobTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  jobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type JobExperienceLink = {
  __typename?: 'JobExperienceLink';
  json: Scalars['JSON']['output'];
  links: JobExperienceLinkLinks;
};

export type JobExperienceLinkAssets = {
  __typename?: 'JobExperienceLinkAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type JobExperienceLinkEntries = {
  __typename?: 'JobExperienceLinkEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type JobExperienceLinkLinks = {
  __typename?: 'JobExperienceLinkLinks';
  assets: JobExperienceLinkAssets;
  entries: JobExperienceLinkEntries;
  resources: JobExperienceLinkResources;
};

export type JobExperienceLinkResources = {
  __typename?: 'JobExperienceLinkResources';
  block: Array<JobExperienceLinkResourcesBlock>;
  hyperlink: Array<JobExperienceLinkResourcesHyperlink>;
  inline: Array<JobExperienceLinkResourcesInline>;
};

export type JobExperienceLinkResourcesBlock = ResourceLink & {
  __typename?: 'JobExperienceLinkResourcesBlock';
  sys: ResourceSys;
};

export type JobExperienceLinkResourcesHyperlink = ResourceLink & {
  __typename?: 'JobExperienceLinkResourcesHyperlink';
  sys: ResourceSys;
};

export type JobExperienceLinkResourcesInline = ResourceLink & {
  __typename?: 'JobExperienceLinkResourcesInline';
  sys: ResourceSys;
};

export type JobExperienceLinkingCollections = {
  __typename?: 'JobExperienceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type JobExperienceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum JobExperienceOrder {
  CompanyNameAsc = 'companyName_ASC',
  CompanyNameDesc = 'companyName_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** personal information with name, short description, long description, photo [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/personalInformation) */
export type PersonalInformation = Entry & {
  __typename?: 'PersonalInformation';
  aboutMe?: Maybe<Scalars['String']['output']>;
  bgVideo?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  cover?: Maybe<Asset>;
  cv?: Maybe<Asset>;
  linkedFrom?: Maybe<PersonalInformationLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Asset>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** personal information with name, short description, long description, photo [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/personalInformation) */
export type PersonalInformationAboutMeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** personal information with name, short description, long description, photo [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/personalInformation) */
export type PersonalInformationBgVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** personal information with name, short description, long description, photo [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/personalInformation) */
export type PersonalInformationCoverArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** personal information with name, short description, long description, photo [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/personalInformation) */
export type PersonalInformationCvArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** personal information with name, short description, long description, photo [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/personalInformation) */
export type PersonalInformationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** personal information with name, short description, long description, photo [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/personalInformation) */
export type PersonalInformationNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** personal information with name, short description, long description, photo [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/personalInformation) */
export type PersonalInformationPhotoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** personal information with name, short description, long description, photo [See type definition](https://app.contentful.com/spaces/8e4cftpjs07x/content_types/personalInformation) */
export type PersonalInformationShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PersonalInformationCollection = {
  __typename?: 'PersonalInformationCollection';
  items: Array<Maybe<PersonalInformation>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PersonalInformationFilter = {
  AND?: InputMaybe<Array<InputMaybe<PersonalInformationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PersonalInformationFilter>>>;
  aboutMe?: InputMaybe<Scalars['String']['input']>;
  aboutMe_contains?: InputMaybe<Scalars['String']['input']>;
  aboutMe_exists?: InputMaybe<Scalars['Boolean']['input']>;
  aboutMe_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aboutMe_not?: InputMaybe<Scalars['String']['input']>;
  aboutMe_not_contains?: InputMaybe<Scalars['String']['input']>;
  aboutMe_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bgVideo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cover_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cv_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  photo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PersonalInformationLinkingCollections = {
  __typename?: 'PersonalInformationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PersonalInformationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PersonalInformationOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  jobExperience?: Maybe<JobExperience>;
  jobExperienceCollection?: Maybe<JobExperienceCollection>;
  personalInformation?: Maybe<PersonalInformation>;
  personalInformationCollection?: Maybe<PersonalInformationCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryJobExperienceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryJobExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<JobExperienceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobExperienceFilter>;
};


export type QueryPersonalInformationArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPersonalInformationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PersonalInformationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonalInformationFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type GetPersonalInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPersonalInfoQuery = { __typename?: 'Query', personalInformationCollection?: { __typename?: 'PersonalInformationCollection', items: Array<{ __typename?: 'PersonalInformation', name?: string | null, shortDescription?: string | null, photo?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, cv?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };
