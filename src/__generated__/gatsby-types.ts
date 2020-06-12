/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  JSON: never;
};











type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};


type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 1,
  NORTHEAST = 5,
  EAST = 2,
  SOUTHEAST = 6,
  SOUTH = 3,
  SOUTHWEST = 7,
  WEST = 4,
  NORTHWEST = 8,
  ENTROPY = 16,
  ATTENTION = 17
}

enum ImageFit {
  COVER = 'cover',
  CONTAIN = 'contain',
  FILL = 'fill',
  INSIDE = 'inside',
  OUTSIDE = 'outside'
}

enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ImageSharpSizes>;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_resolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fixed___originalName = 'fixed.originalName',
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  resolutions___originalName = 'resolutions.originalName',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  fluid___originalImg = 'fluid.originalImg',
  fluid___originalName = 'fluid.originalName',
  fluid___presentationWidth = 'fluid.presentationWidth',
  fluid___presentationHeight = 'fluid.presentationHeight',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  sizes___originalImg = 'sizes.originalImg',
  sizes___originalName = 'sizes.originalName',
  sizes___presentationWidth = 'sizes.presentationWidth',
  sizes___presentationHeight = 'sizes.presentationHeight',
  original___width = 'original.width',
  original___height = 'original.height',
  original___src = 'original.src',
  resize___src = 'resize.src',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  resize___originalName = 'resize.originalName',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResolutions = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly sanityCategory: Maybe<SanityCategory>;
  readonly allSanityCategory: SanityCategoryConnection;
  readonly sanityMaterial: Maybe<SanityMaterial>;
  readonly allSanityMaterial: SanityMaterialConnection;
  readonly sanityProduct: Maybe<SanityProduct>;
  readonly allSanityProduct: SanityProductConnection;
  readonly sanityFileAsset: Maybe<SanityFileAsset>;
  readonly allSanityFileAsset: SanityFileAssetConnection;
  readonly sanityImageAsset: Maybe<SanityImageAsset>;
  readonly allSanityImageAsset: SanityImageAssetConnection;
  readonly sanitySiteSettings: Maybe<SanitySiteSettings>;
  readonly allSanitySiteSettings: SanitySiteSettingsConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityCategoryArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<SanitySlugFilterInput>;
  description: Maybe<StringQueryOperatorInput>;
  parents: Maybe<SanityCategoryFilterListInput>;
  image: Maybe<SanityImageFilterInput>;
  _rawSlug: Maybe<JSONQueryOperatorInput>;
  _rawParents: Maybe<JSONQueryOperatorInput>;
  _rawImage: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityCategoryArgs = {
  filter: Maybe<SanityCategoryFilterInput>;
  sort: Maybe<SanityCategorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityMaterialArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityMaterialArgs = {
  filter: Maybe<SanityMaterialFilterInput>;
  sort: Maybe<SanityMaterialSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityProductArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<SanitySlugFilterInput>;
  price: Maybe<FloatQueryOperatorInput>;
  oldPrice: Maybe<FloatQueryOperatorInput>;
  images: Maybe<SanityImageFilterListInput>;
  sizes: Maybe<SanityProductSizesFilterInput>;
  materials: Maybe<SanityMaterialFilterListInput>;
  categories: Maybe<SanityCategoryFilterListInput>;
  body: Maybe<SanityBlockFilterListInput>;
  _rawSlug: Maybe<JSONQueryOperatorInput>;
  _rawImages: Maybe<JSONQueryOperatorInput>;
  _rawSizes: Maybe<JSONQueryOperatorInput>;
  _rawMaterials: Maybe<JSONQueryOperatorInput>;
  _rawCategories: Maybe<JSONQueryOperatorInput>;
  _rawBody: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityProductArgs = {
  filter: Maybe<SanityProductFilterInput>;
  sort: Maybe<SanityProductSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityFileAssetArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  originalFilename: Maybe<StringQueryOperatorInput>;
  label: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sha1hash: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  mimeType: Maybe<StringQueryOperatorInput>;
  size: Maybe<FloatQueryOperatorInput>;
  assetId: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  source: Maybe<SanityAssetSourceDataFilterInput>;
  _rawSource: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityFileAssetArgs = {
  filter: Maybe<SanityFileAssetFilterInput>;
  sort: Maybe<SanityFileAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityImageAssetArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  originalFilename: Maybe<StringQueryOperatorInput>;
  label: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sha1hash: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  mimeType: Maybe<StringQueryOperatorInput>;
  size: Maybe<FloatQueryOperatorInput>;
  assetId: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  metadata: Maybe<SanityImageMetadataFilterInput>;
  source: Maybe<SanityAssetSourceDataFilterInput>;
  fixed: Maybe<SanityImageFixedFilterInput>;
  fluid: Maybe<SanityImageFluidFilterInput>;
  _rawMetadata: Maybe<JSONQueryOperatorInput>;
  _rawSource: Maybe<JSONQueryOperatorInput>;
  localFile: Maybe<FileFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
};


type Query_allSanityImageAssetArgs = {
  filter: Maybe<SanityImageAssetFilterInput>;
  sort: Maybe<SanityImageAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanitySiteSettingsArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  keywords: Maybe<StringQueryOperatorInput>;
  emails: Maybe<StringQueryOperatorInput>;
  phoneNumbers: Maybe<StringQueryOperatorInput>;
  addresses: Maybe<SanityAddressFilterListInput>;
  _rawAddresses: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanitySiteSettingsArgs = {
  filter: Maybe<SanitySiteSettingsFilterInput>;
  sort: Maybe<SanitySiteSettingsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type SanityAddress = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly street: Maybe<Scalars['String']>;
  readonly streetNo: Maybe<Scalars['String']>;
  readonly city: Maybe<Scalars['String']>;
  readonly location: Maybe<SanityGeopoint>;
};

type SanityAddressFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly street: Maybe<StringQueryOperatorInput>;
  readonly streetNo: Maybe<StringQueryOperatorInput>;
  readonly city: Maybe<StringQueryOperatorInput>;
  readonly location: Maybe<SanityGeopointFilterInput>;
};

type SanityAddressFilterListInput = {
  readonly elemMatch: Maybe<SanityAddressFilterInput>;
};

type SanityAssetSourceData = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly sanityId: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type SanityAssetSourceDataFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly sanityId: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type SanityBlock = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly sanityChildren: Maybe<ReadonlyArray<Maybe<SanitySpan>>>;
  readonly style: Maybe<Scalars['String']>;
  readonly list: Maybe<Scalars['String']>;
};

type SanityBlockFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly sanityChildren: Maybe<SanitySpanFilterListInput>;
  readonly style: Maybe<StringQueryOperatorInput>;
  readonly list: Maybe<StringQueryOperatorInput>;
};

type SanityBlockFilterListInput = {
  readonly elemMatch: Maybe<SanityBlockFilterInput>;
};

type SanityBlockOrImage = SanityBlock | SanityImage;

type SanityCategory = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<SanitySlug>;
  readonly description: Maybe<Scalars['String']>;
  readonly parents: Maybe<ReadonlyArray<Maybe<SanityCategory>>>;
  readonly image: Maybe<SanityImage>;
  readonly _rawSlug: Maybe<Scalars['JSON']>;
  readonly _rawParents: Maybe<Scalars['JSON']>;
  readonly _rawImage: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityCategory__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityCategory__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityCategory__rawSlugArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityCategory__rawParentsArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityCategory__rawImageArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityCategoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityCategoryEdge>;
  readonly nodes: ReadonlyArray<SanityCategory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityCategoryGroupConnection>;
};


type SanityCategoryConnection_distinctArgs = {
  field: SanityCategoryFieldsEnum;
};


type SanityCategoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityCategoryFieldsEnum;
};

type SanityCategoryEdge = {
  readonly next: Maybe<SanityCategory>;
  readonly node: SanityCategory;
  readonly previous: Maybe<SanityCategory>;
};

enum SanityCategoryFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  slug____key = 'slug._key',
  slug____type = 'slug._type',
  slug___current = 'slug.current',
  description = 'description',
  parents = 'parents',
  parents____id = 'parents._id',
  parents____type = 'parents._type',
  parents____createdAt = 'parents._createdAt',
  parents____updatedAt = 'parents._updatedAt',
  parents____rev = 'parents._rev',
  parents____key = 'parents._key',
  parents___title = 'parents.title',
  parents___slug____key = 'parents.slug._key',
  parents___slug____type = 'parents.slug._type',
  parents___slug___current = 'parents.slug.current',
  parents___description = 'parents.description',
  parents___parents = 'parents.parents',
  parents___parents____id = 'parents.parents._id',
  parents___parents____type = 'parents.parents._type',
  parents___parents____createdAt = 'parents.parents._createdAt',
  parents___parents____updatedAt = 'parents.parents._updatedAt',
  parents___parents____rev = 'parents.parents._rev',
  parents___parents____key = 'parents.parents._key',
  parents___parents___title = 'parents.parents.title',
  parents___parents___slug____key = 'parents.parents.slug._key',
  parents___parents___slug____type = 'parents.parents.slug._type',
  parents___parents___slug___current = 'parents.parents.slug.current',
  parents___parents___description = 'parents.parents.description',
  parents___parents___parents = 'parents.parents.parents',
  parents___parents___parents____id = 'parents.parents.parents._id',
  parents___parents___parents____type = 'parents.parents.parents._type',
  parents___parents___parents____createdAt = 'parents.parents.parents._createdAt',
  parents___parents___parents____updatedAt = 'parents.parents.parents._updatedAt',
  parents___parents___parents____rev = 'parents.parents.parents._rev',
  parents___parents___parents____key = 'parents.parents.parents._key',
  parents___parents___parents___title = 'parents.parents.parents.title',
  parents___parents___parents___description = 'parents.parents.parents.description',
  parents___parents___parents___parents = 'parents.parents.parents.parents',
  parents___parents___parents____rawSlug = 'parents.parents.parents._rawSlug',
  parents___parents___parents____rawParents = 'parents.parents.parents._rawParents',
  parents___parents___parents____rawImage = 'parents.parents.parents._rawImage',
  parents___parents___parents___id = 'parents.parents.parents.id',
  parents___parents___parents___children = 'parents.parents.parents.children',
  parents___parents___image____key = 'parents.parents.image._key',
  parents___parents___image____type = 'parents.parents.image._type',
  parents___parents____rawSlug = 'parents.parents._rawSlug',
  parents___parents____rawParents = 'parents.parents._rawParents',
  parents___parents____rawImage = 'parents.parents._rawImage',
  parents___parents___id = 'parents.parents.id',
  parents___parents___parent___id = 'parents.parents.parent.id',
  parents___parents___parent___children = 'parents.parents.parent.children',
  parents___parents___children = 'parents.parents.children',
  parents___parents___children___id = 'parents.parents.children.id',
  parents___parents___children___children = 'parents.parents.children.children',
  parents___parents___internal___content = 'parents.parents.internal.content',
  parents___parents___internal___contentDigest = 'parents.parents.internal.contentDigest',
  parents___parents___internal___description = 'parents.parents.internal.description',
  parents___parents___internal___fieldOwners = 'parents.parents.internal.fieldOwners',
  parents___parents___internal___ignoreType = 'parents.parents.internal.ignoreType',
  parents___parents___internal___mediaType = 'parents.parents.internal.mediaType',
  parents___parents___internal___owner = 'parents.parents.internal.owner',
  parents___parents___internal___type = 'parents.parents.internal.type',
  parents___image____key = 'parents.image._key',
  parents___image____type = 'parents.image._type',
  parents___image___asset____id = 'parents.image.asset._id',
  parents___image___asset____type = 'parents.image.asset._type',
  parents___image___asset____createdAt = 'parents.image.asset._createdAt',
  parents___image___asset____updatedAt = 'parents.image.asset._updatedAt',
  parents___image___asset____rev = 'parents.image.asset._rev',
  parents___image___asset____key = 'parents.image.asset._key',
  parents___image___asset___originalFilename = 'parents.image.asset.originalFilename',
  parents___image___asset___label = 'parents.image.asset.label',
  parents___image___asset___title = 'parents.image.asset.title',
  parents___image___asset___description = 'parents.image.asset.description',
  parents___image___asset___sha1hash = 'parents.image.asset.sha1hash',
  parents___image___asset___extension = 'parents.image.asset.extension',
  parents___image___asset___mimeType = 'parents.image.asset.mimeType',
  parents___image___asset___size = 'parents.image.asset.size',
  parents___image___asset___assetId = 'parents.image.asset.assetId',
  parents___image___asset___path = 'parents.image.asset.path',
  parents___image___asset___url = 'parents.image.asset.url',
  parents___image___asset____rawMetadata = 'parents.image.asset._rawMetadata',
  parents___image___asset____rawSource = 'parents.image.asset._rawSource',
  parents___image___asset___id = 'parents.image.asset.id',
  parents___image___asset___children = 'parents.image.asset.children',
  parents___image___hotspot____key = 'parents.image.hotspot._key',
  parents___image___hotspot____type = 'parents.image.hotspot._type',
  parents___image___hotspot___x = 'parents.image.hotspot.x',
  parents___image___hotspot___y = 'parents.image.hotspot.y',
  parents___image___hotspot___height = 'parents.image.hotspot.height',
  parents___image___hotspot___width = 'parents.image.hotspot.width',
  parents___image___crop____key = 'parents.image.crop._key',
  parents___image___crop____type = 'parents.image.crop._type',
  parents___image___crop___top = 'parents.image.crop.top',
  parents___image___crop___bottom = 'parents.image.crop.bottom',
  parents___image___crop___left = 'parents.image.crop.left',
  parents___image___crop___right = 'parents.image.crop.right',
  parents____rawSlug = 'parents._rawSlug',
  parents____rawParents = 'parents._rawParents',
  parents____rawImage = 'parents._rawImage',
  parents___id = 'parents.id',
  parents___parent___id = 'parents.parent.id',
  parents___parent___parent___id = 'parents.parent.parent.id',
  parents___parent___parent___children = 'parents.parent.parent.children',
  parents___parent___children = 'parents.parent.children',
  parents___parent___children___id = 'parents.parent.children.id',
  parents___parent___children___children = 'parents.parent.children.children',
  parents___parent___internal___content = 'parents.parent.internal.content',
  parents___parent___internal___contentDigest = 'parents.parent.internal.contentDigest',
  parents___parent___internal___description = 'parents.parent.internal.description',
  parents___parent___internal___fieldOwners = 'parents.parent.internal.fieldOwners',
  parents___parent___internal___ignoreType = 'parents.parent.internal.ignoreType',
  parents___parent___internal___mediaType = 'parents.parent.internal.mediaType',
  parents___parent___internal___owner = 'parents.parent.internal.owner',
  parents___parent___internal___type = 'parents.parent.internal.type',
  parents___children = 'parents.children',
  parents___children___id = 'parents.children.id',
  parents___children___parent___id = 'parents.children.parent.id',
  parents___children___parent___children = 'parents.children.parent.children',
  parents___children___children = 'parents.children.children',
  parents___children___children___id = 'parents.children.children.id',
  parents___children___children___children = 'parents.children.children.children',
  parents___children___internal___content = 'parents.children.internal.content',
  parents___children___internal___contentDigest = 'parents.children.internal.contentDigest',
  parents___children___internal___description = 'parents.children.internal.description',
  parents___children___internal___fieldOwners = 'parents.children.internal.fieldOwners',
  parents___children___internal___ignoreType = 'parents.children.internal.ignoreType',
  parents___children___internal___mediaType = 'parents.children.internal.mediaType',
  parents___children___internal___owner = 'parents.children.internal.owner',
  parents___children___internal___type = 'parents.children.internal.type',
  parents___internal___content = 'parents.internal.content',
  parents___internal___contentDigest = 'parents.internal.contentDigest',
  parents___internal___description = 'parents.internal.description',
  parents___internal___fieldOwners = 'parents.internal.fieldOwners',
  parents___internal___ignoreType = 'parents.internal.ignoreType',
  parents___internal___mediaType = 'parents.internal.mediaType',
  parents___internal___owner = 'parents.internal.owner',
  parents___internal___type = 'parents.internal.type',
  image____key = 'image._key',
  image____type = 'image._type',
  image___asset____id = 'image.asset._id',
  image___asset____type = 'image.asset._type',
  image___asset____createdAt = 'image.asset._createdAt',
  image___asset____updatedAt = 'image.asset._updatedAt',
  image___asset____rev = 'image.asset._rev',
  image___asset____key = 'image.asset._key',
  image___asset___originalFilename = 'image.asset.originalFilename',
  image___asset___label = 'image.asset.label',
  image___asset___title = 'image.asset.title',
  image___asset___description = 'image.asset.description',
  image___asset___sha1hash = 'image.asset.sha1hash',
  image___asset___extension = 'image.asset.extension',
  image___asset___mimeType = 'image.asset.mimeType',
  image___asset___size = 'image.asset.size',
  image___asset___assetId = 'image.asset.assetId',
  image___asset___path = 'image.asset.path',
  image___asset___url = 'image.asset.url',
  image___asset___metadata____key = 'image.asset.metadata._key',
  image___asset___metadata____type = 'image.asset.metadata._type',
  image___asset___metadata___lqip = 'image.asset.metadata.lqip',
  image___asset___metadata___hasAlpha = 'image.asset.metadata.hasAlpha',
  image___asset___metadata___isOpaque = 'image.asset.metadata.isOpaque',
  image___asset___source____key = 'image.asset.source._key',
  image___asset___source____type = 'image.asset.source._type',
  image___asset___source___name = 'image.asset.source.name',
  image___asset___source___sanityId = 'image.asset.source.sanityId',
  image___asset___source___url = 'image.asset.source.url',
  image___asset___fixed___base64 = 'image.asset.fixed.base64',
  image___asset___fixed___aspectRatio = 'image.asset.fixed.aspectRatio',
  image___asset___fixed___width = 'image.asset.fixed.width',
  image___asset___fixed___height = 'image.asset.fixed.height',
  image___asset___fixed___src = 'image.asset.fixed.src',
  image___asset___fixed___srcSet = 'image.asset.fixed.srcSet',
  image___asset___fixed___srcWebp = 'image.asset.fixed.srcWebp',
  image___asset___fixed___srcSetWebp = 'image.asset.fixed.srcSetWebp',
  image___asset___fluid___base64 = 'image.asset.fluid.base64',
  image___asset___fluid___aspectRatio = 'image.asset.fluid.aspectRatio',
  image___asset___fluid___src = 'image.asset.fluid.src',
  image___asset___fluid___srcSet = 'image.asset.fluid.srcSet',
  image___asset___fluid___srcWebp = 'image.asset.fluid.srcWebp',
  image___asset___fluid___srcSetWebp = 'image.asset.fluid.srcSetWebp',
  image___asset___fluid___sizes = 'image.asset.fluid.sizes',
  image___asset____rawMetadata = 'image.asset._rawMetadata',
  image___asset____rawSource = 'image.asset._rawSource',
  image___asset___localFile___sourceInstanceName = 'image.asset.localFile.sourceInstanceName',
  image___asset___localFile___absolutePath = 'image.asset.localFile.absolutePath',
  image___asset___localFile___relativePath = 'image.asset.localFile.relativePath',
  image___asset___localFile___extension = 'image.asset.localFile.extension',
  image___asset___localFile___size = 'image.asset.localFile.size',
  image___asset___localFile___prettySize = 'image.asset.localFile.prettySize',
  image___asset___localFile___modifiedTime = 'image.asset.localFile.modifiedTime',
  image___asset___localFile___accessTime = 'image.asset.localFile.accessTime',
  image___asset___localFile___changeTime = 'image.asset.localFile.changeTime',
  image___asset___localFile___birthTime = 'image.asset.localFile.birthTime',
  image___asset___localFile___root = 'image.asset.localFile.root',
  image___asset___localFile___dir = 'image.asset.localFile.dir',
  image___asset___localFile___base = 'image.asset.localFile.base',
  image___asset___localFile___ext = 'image.asset.localFile.ext',
  image___asset___localFile___name = 'image.asset.localFile.name',
  image___asset___localFile___relativeDirectory = 'image.asset.localFile.relativeDirectory',
  image___asset___localFile___dev = 'image.asset.localFile.dev',
  image___asset___localFile___mode = 'image.asset.localFile.mode',
  image___asset___localFile___nlink = 'image.asset.localFile.nlink',
  image___asset___localFile___uid = 'image.asset.localFile.uid',
  image___asset___localFile___gid = 'image.asset.localFile.gid',
  image___asset___localFile___rdev = 'image.asset.localFile.rdev',
  image___asset___localFile___ino = 'image.asset.localFile.ino',
  image___asset___localFile___atimeMs = 'image.asset.localFile.atimeMs',
  image___asset___localFile___mtimeMs = 'image.asset.localFile.mtimeMs',
  image___asset___localFile___ctimeMs = 'image.asset.localFile.ctimeMs',
  image___asset___localFile___atime = 'image.asset.localFile.atime',
  image___asset___localFile___mtime = 'image.asset.localFile.mtime',
  image___asset___localFile___ctime = 'image.asset.localFile.ctime',
  image___asset___localFile___birthtime = 'image.asset.localFile.birthtime',
  image___asset___localFile___birthtimeMs = 'image.asset.localFile.birthtimeMs',
  image___asset___localFile___blksize = 'image.asset.localFile.blksize',
  image___asset___localFile___blocks = 'image.asset.localFile.blocks',
  image___asset___localFile___publicURL = 'image.asset.localFile.publicURL',
  image___asset___localFile___id = 'image.asset.localFile.id',
  image___asset___localFile___children = 'image.asset.localFile.children',
  image___asset___id = 'image.asset.id',
  image___asset___parent___id = 'image.asset.parent.id',
  image___asset___parent___children = 'image.asset.parent.children',
  image___asset___children = 'image.asset.children',
  image___asset___children___id = 'image.asset.children.id',
  image___asset___children___children = 'image.asset.children.children',
  image___asset___internal___content = 'image.asset.internal.content',
  image___asset___internal___contentDigest = 'image.asset.internal.contentDigest',
  image___asset___internal___description = 'image.asset.internal.description',
  image___asset___internal___fieldOwners = 'image.asset.internal.fieldOwners',
  image___asset___internal___ignoreType = 'image.asset.internal.ignoreType',
  image___asset___internal___mediaType = 'image.asset.internal.mediaType',
  image___asset___internal___owner = 'image.asset.internal.owner',
  image___asset___internal___type = 'image.asset.internal.type',
  image___asset___childImageSharp___id = 'image.asset.childImageSharp.id',
  image___asset___childImageSharp___children = 'image.asset.childImageSharp.children',
  image___hotspot____key = 'image.hotspot._key',
  image___hotspot____type = 'image.hotspot._type',
  image___hotspot___x = 'image.hotspot.x',
  image___hotspot___y = 'image.hotspot.y',
  image___hotspot___height = 'image.hotspot.height',
  image___hotspot___width = 'image.hotspot.width',
  image___crop____key = 'image.crop._key',
  image___crop____type = 'image.crop._type',
  image___crop___top = 'image.crop.top',
  image___crop___bottom = 'image.crop.bottom',
  image___crop___left = 'image.crop.left',
  image___crop___right = 'image.crop.right',
  _rawSlug = '_rawSlug',
  _rawParents = '_rawParents',
  _rawImage = '_rawImage',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityCategoryFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<SanitySlugFilterInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly parents: Maybe<SanityCategoryFilterListInput>;
  readonly image: Maybe<SanityImageFilterInput>;
  readonly _rawSlug: Maybe<JSONQueryOperatorInput>;
  readonly _rawParents: Maybe<JSONQueryOperatorInput>;
  readonly _rawImage: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityCategoryFilterListInput = {
  readonly elemMatch: Maybe<SanityCategoryFilterInput>;
};

type SanityCategoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityCategoryEdge>;
  readonly nodes: ReadonlyArray<SanityCategory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityCategorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityCategoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

/** A Sanity document */
type SanityDocument = {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
};

type SanityFile = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly asset: Maybe<SanityFileAsset>;
};

type SanityFileAsset = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly originalFilename: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sha1hash: Maybe<Scalars['String']>;
  readonly extension: Maybe<Scalars['String']>;
  readonly mimeType: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly assetId: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly source: Maybe<SanityAssetSourceData>;
  readonly _rawSource: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityFileAsset__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityFileAsset__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityFileAsset__rawSourceArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityFileAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityFileAssetEdge>;
  readonly nodes: ReadonlyArray<SanityFileAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityFileAssetGroupConnection>;
};


type SanityFileAssetConnection_distinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


type SanityFileAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityFileAssetFieldsEnum;
};

type SanityFileAssetEdge = {
  readonly next: Maybe<SanityFileAsset>;
  readonly node: SanityFileAsset;
  readonly previous: Maybe<SanityFileAsset>;
};

enum SanityFileAssetFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  originalFilename = 'originalFilename',
  label = 'label',
  title = 'title',
  description = 'description',
  sha1hash = 'sha1hash',
  extension = 'extension',
  mimeType = 'mimeType',
  size = 'size',
  assetId = 'assetId',
  path = 'path',
  url = 'url',
  source____key = 'source._key',
  source____type = 'source._type',
  source___name = 'source.name',
  source___sanityId = 'source.sanityId',
  source___url = 'source.url',
  _rawSource = '_rawSource',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityFileAssetFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly originalFilename: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sha1hash: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly mimeType: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly assetId: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly source: Maybe<SanityAssetSourceDataFilterInput>;
  readonly _rawSource: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityFileAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityFileAssetEdge>;
  readonly nodes: ReadonlyArray<SanityFileAsset>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityFileAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityFileAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityGeopoint = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly lat: Maybe<Scalars['Float']>;
  readonly lng: Maybe<Scalars['Float']>;
  readonly alt: Maybe<Scalars['Float']>;
};

type SanityGeopointFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly lat: Maybe<FloatQueryOperatorInput>;
  readonly lng: Maybe<FloatQueryOperatorInput>;
  readonly alt: Maybe<FloatQueryOperatorInput>;
};

type SanityImage = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly asset: Maybe<SanityImageAsset>;
  readonly hotspot: Maybe<SanityImageHotspot>;
  readonly crop: Maybe<SanityImageCrop>;
};

type SanityImageAsset = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly originalFilename: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sha1hash: Maybe<Scalars['String']>;
  readonly extension: Maybe<Scalars['String']>;
  readonly mimeType: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly assetId: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly metadata: Maybe<SanityImageMetadata>;
  readonly source: Maybe<SanityAssetSourceData>;
  readonly fixed: Maybe<SanityImageFixed>;
  readonly fluid: Maybe<SanityImageFluid>;
  readonly _rawMetadata: Maybe<Scalars['JSON']>;
  readonly _rawSource: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly childImageSharp: Maybe<ImageSharp>;
};


type SanityImageAsset__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityImageAsset__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityImageAsset_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  toFormat?: Maybe<SanityImageFormat>;
};


type SanityImageAsset_fluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  sizes: Maybe<Scalars['String']>;
  toFormat?: Maybe<SanityImageFormat>;
};


type SanityImageAsset__rawMetadataArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityImageAsset__rawSourceArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityImageAsset_localFileArgs = {
  width: Maybe<Scalars['Int']>;
  format: Maybe<SanityTransformImagesImageFormat>;
  height: Maybe<Scalars['Int']>;
  fit?: Maybe<Scalars['String']>;
};

type SanityImageAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityImageAssetEdge>;
  readonly nodes: ReadonlyArray<SanityImageAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityImageAssetGroupConnection>;
};


type SanityImageAssetConnection_distinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


type SanityImageAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityImageAssetFieldsEnum;
};

type SanityImageAssetEdge = {
  readonly next: Maybe<SanityImageAsset>;
  readonly node: SanityImageAsset;
  readonly previous: Maybe<SanityImageAsset>;
};

enum SanityImageAssetFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  originalFilename = 'originalFilename',
  label = 'label',
  title = 'title',
  description = 'description',
  sha1hash = 'sha1hash',
  extension = 'extension',
  mimeType = 'mimeType',
  size = 'size',
  assetId = 'assetId',
  path = 'path',
  url = 'url',
  metadata____key = 'metadata._key',
  metadata____type = 'metadata._type',
  metadata___location____key = 'metadata.location._key',
  metadata___location____type = 'metadata.location._type',
  metadata___location___lat = 'metadata.location.lat',
  metadata___location___lng = 'metadata.location.lng',
  metadata___location___alt = 'metadata.location.alt',
  metadata___dimensions____key = 'metadata.dimensions._key',
  metadata___dimensions____type = 'metadata.dimensions._type',
  metadata___dimensions___height = 'metadata.dimensions.height',
  metadata___dimensions___width = 'metadata.dimensions.width',
  metadata___dimensions___aspectRatio = 'metadata.dimensions.aspectRatio',
  metadata___palette____key = 'metadata.palette._key',
  metadata___palette____type = 'metadata.palette._type',
  metadata___palette___darkMuted____key = 'metadata.palette.darkMuted._key',
  metadata___palette___darkMuted____type = 'metadata.palette.darkMuted._type',
  metadata___palette___darkMuted___background = 'metadata.palette.darkMuted.background',
  metadata___palette___darkMuted___foreground = 'metadata.palette.darkMuted.foreground',
  metadata___palette___darkMuted___population = 'metadata.palette.darkMuted.population',
  metadata___palette___darkMuted___title = 'metadata.palette.darkMuted.title',
  metadata___palette___lightVibrant____key = 'metadata.palette.lightVibrant._key',
  metadata___palette___lightVibrant____type = 'metadata.palette.lightVibrant._type',
  metadata___palette___lightVibrant___background = 'metadata.palette.lightVibrant.background',
  metadata___palette___lightVibrant___foreground = 'metadata.palette.lightVibrant.foreground',
  metadata___palette___lightVibrant___population = 'metadata.palette.lightVibrant.population',
  metadata___palette___lightVibrant___title = 'metadata.palette.lightVibrant.title',
  metadata___palette___darkVibrant____key = 'metadata.palette.darkVibrant._key',
  metadata___palette___darkVibrant____type = 'metadata.palette.darkVibrant._type',
  metadata___palette___darkVibrant___background = 'metadata.palette.darkVibrant.background',
  metadata___palette___darkVibrant___foreground = 'metadata.palette.darkVibrant.foreground',
  metadata___palette___darkVibrant___population = 'metadata.palette.darkVibrant.population',
  metadata___palette___darkVibrant___title = 'metadata.palette.darkVibrant.title',
  metadata___palette___vibrant____key = 'metadata.palette.vibrant._key',
  metadata___palette___vibrant____type = 'metadata.palette.vibrant._type',
  metadata___palette___vibrant___background = 'metadata.palette.vibrant.background',
  metadata___palette___vibrant___foreground = 'metadata.palette.vibrant.foreground',
  metadata___palette___vibrant___population = 'metadata.palette.vibrant.population',
  metadata___palette___vibrant___title = 'metadata.palette.vibrant.title',
  metadata___palette___dominant____key = 'metadata.palette.dominant._key',
  metadata___palette___dominant____type = 'metadata.palette.dominant._type',
  metadata___palette___dominant___background = 'metadata.palette.dominant.background',
  metadata___palette___dominant___foreground = 'metadata.palette.dominant.foreground',
  metadata___palette___dominant___population = 'metadata.palette.dominant.population',
  metadata___palette___dominant___title = 'metadata.palette.dominant.title',
  metadata___palette___lightMuted____key = 'metadata.palette.lightMuted._key',
  metadata___palette___lightMuted____type = 'metadata.palette.lightMuted._type',
  metadata___palette___lightMuted___background = 'metadata.palette.lightMuted.background',
  metadata___palette___lightMuted___foreground = 'metadata.palette.lightMuted.foreground',
  metadata___palette___lightMuted___population = 'metadata.palette.lightMuted.population',
  metadata___palette___lightMuted___title = 'metadata.palette.lightMuted.title',
  metadata___palette___muted____key = 'metadata.palette.muted._key',
  metadata___palette___muted____type = 'metadata.palette.muted._type',
  metadata___palette___muted___background = 'metadata.palette.muted.background',
  metadata___palette___muted___foreground = 'metadata.palette.muted.foreground',
  metadata___palette___muted___population = 'metadata.palette.muted.population',
  metadata___palette___muted___title = 'metadata.palette.muted.title',
  metadata___lqip = 'metadata.lqip',
  metadata___hasAlpha = 'metadata.hasAlpha',
  metadata___isOpaque = 'metadata.isOpaque',
  source____key = 'source._key',
  source____type = 'source._type',
  source___name = 'source.name',
  source___sanityId = 'source.sanityId',
  source___url = 'source.url',
  fixed___base64 = 'fixed.base64',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fluid___base64 = 'fluid.base64',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  _rawMetadata = '_rawMetadata',
  _rawSource = '_rawSource',
  localFile___sourceInstanceName = 'localFile.sourceInstanceName',
  localFile___absolutePath = 'localFile.absolutePath',
  localFile___relativePath = 'localFile.relativePath',
  localFile___extension = 'localFile.extension',
  localFile___size = 'localFile.size',
  localFile___prettySize = 'localFile.prettySize',
  localFile___modifiedTime = 'localFile.modifiedTime',
  localFile___accessTime = 'localFile.accessTime',
  localFile___changeTime = 'localFile.changeTime',
  localFile___birthTime = 'localFile.birthTime',
  localFile___root = 'localFile.root',
  localFile___dir = 'localFile.dir',
  localFile___base = 'localFile.base',
  localFile___ext = 'localFile.ext',
  localFile___name = 'localFile.name',
  localFile___relativeDirectory = 'localFile.relativeDirectory',
  localFile___dev = 'localFile.dev',
  localFile___mode = 'localFile.mode',
  localFile___nlink = 'localFile.nlink',
  localFile___uid = 'localFile.uid',
  localFile___gid = 'localFile.gid',
  localFile___rdev = 'localFile.rdev',
  localFile___ino = 'localFile.ino',
  localFile___atimeMs = 'localFile.atimeMs',
  localFile___mtimeMs = 'localFile.mtimeMs',
  localFile___ctimeMs = 'localFile.ctimeMs',
  localFile___atime = 'localFile.atime',
  localFile___mtime = 'localFile.mtime',
  localFile___ctime = 'localFile.ctime',
  localFile___birthtime = 'localFile.birthtime',
  localFile___birthtimeMs = 'localFile.birthtimeMs',
  localFile___blksize = 'localFile.blksize',
  localFile___blocks = 'localFile.blocks',
  localFile___publicURL = 'localFile.publicURL',
  localFile___childImageSharp___fixed___base64 = 'localFile.childImageSharp.fixed.base64',
  localFile___childImageSharp___fixed___tracedSVG = 'localFile.childImageSharp.fixed.tracedSVG',
  localFile___childImageSharp___fixed___aspectRatio = 'localFile.childImageSharp.fixed.aspectRatio',
  localFile___childImageSharp___fixed___width = 'localFile.childImageSharp.fixed.width',
  localFile___childImageSharp___fixed___height = 'localFile.childImageSharp.fixed.height',
  localFile___childImageSharp___fixed___src = 'localFile.childImageSharp.fixed.src',
  localFile___childImageSharp___fixed___srcSet = 'localFile.childImageSharp.fixed.srcSet',
  localFile___childImageSharp___fixed___srcWebp = 'localFile.childImageSharp.fixed.srcWebp',
  localFile___childImageSharp___fixed___srcSetWebp = 'localFile.childImageSharp.fixed.srcSetWebp',
  localFile___childImageSharp___fixed___originalName = 'localFile.childImageSharp.fixed.originalName',
  localFile___childImageSharp___resolutions___base64 = 'localFile.childImageSharp.resolutions.base64',
  localFile___childImageSharp___resolutions___tracedSVG = 'localFile.childImageSharp.resolutions.tracedSVG',
  localFile___childImageSharp___resolutions___aspectRatio = 'localFile.childImageSharp.resolutions.aspectRatio',
  localFile___childImageSharp___resolutions___width = 'localFile.childImageSharp.resolutions.width',
  localFile___childImageSharp___resolutions___height = 'localFile.childImageSharp.resolutions.height',
  localFile___childImageSharp___resolutions___src = 'localFile.childImageSharp.resolutions.src',
  localFile___childImageSharp___resolutions___srcSet = 'localFile.childImageSharp.resolutions.srcSet',
  localFile___childImageSharp___resolutions___srcWebp = 'localFile.childImageSharp.resolutions.srcWebp',
  localFile___childImageSharp___resolutions___srcSetWebp = 'localFile.childImageSharp.resolutions.srcSetWebp',
  localFile___childImageSharp___resolutions___originalName = 'localFile.childImageSharp.resolutions.originalName',
  localFile___childImageSharp___fluid___base64 = 'localFile.childImageSharp.fluid.base64',
  localFile___childImageSharp___fluid___tracedSVG = 'localFile.childImageSharp.fluid.tracedSVG',
  localFile___childImageSharp___fluid___aspectRatio = 'localFile.childImageSharp.fluid.aspectRatio',
  localFile___childImageSharp___fluid___src = 'localFile.childImageSharp.fluid.src',
  localFile___childImageSharp___fluid___srcSet = 'localFile.childImageSharp.fluid.srcSet',
  localFile___childImageSharp___fluid___srcWebp = 'localFile.childImageSharp.fluid.srcWebp',
  localFile___childImageSharp___fluid___srcSetWebp = 'localFile.childImageSharp.fluid.srcSetWebp',
  localFile___childImageSharp___fluid___sizes = 'localFile.childImageSharp.fluid.sizes',
  localFile___childImageSharp___fluid___originalImg = 'localFile.childImageSharp.fluid.originalImg',
  localFile___childImageSharp___fluid___originalName = 'localFile.childImageSharp.fluid.originalName',
  localFile___childImageSharp___fluid___presentationWidth = 'localFile.childImageSharp.fluid.presentationWidth',
  localFile___childImageSharp___fluid___presentationHeight = 'localFile.childImageSharp.fluid.presentationHeight',
  localFile___childImageSharp___sizes___base64 = 'localFile.childImageSharp.sizes.base64',
  localFile___childImageSharp___sizes___tracedSVG = 'localFile.childImageSharp.sizes.tracedSVG',
  localFile___childImageSharp___sizes___aspectRatio = 'localFile.childImageSharp.sizes.aspectRatio',
  localFile___childImageSharp___sizes___src = 'localFile.childImageSharp.sizes.src',
  localFile___childImageSharp___sizes___srcSet = 'localFile.childImageSharp.sizes.srcSet',
  localFile___childImageSharp___sizes___srcWebp = 'localFile.childImageSharp.sizes.srcWebp',
  localFile___childImageSharp___sizes___srcSetWebp = 'localFile.childImageSharp.sizes.srcSetWebp',
  localFile___childImageSharp___sizes___sizes = 'localFile.childImageSharp.sizes.sizes',
  localFile___childImageSharp___sizes___originalImg = 'localFile.childImageSharp.sizes.originalImg',
  localFile___childImageSharp___sizes___originalName = 'localFile.childImageSharp.sizes.originalName',
  localFile___childImageSharp___sizes___presentationWidth = 'localFile.childImageSharp.sizes.presentationWidth',
  localFile___childImageSharp___sizes___presentationHeight = 'localFile.childImageSharp.sizes.presentationHeight',
  localFile___childImageSharp___original___width = 'localFile.childImageSharp.original.width',
  localFile___childImageSharp___original___height = 'localFile.childImageSharp.original.height',
  localFile___childImageSharp___original___src = 'localFile.childImageSharp.original.src',
  localFile___childImageSharp___resize___src = 'localFile.childImageSharp.resize.src',
  localFile___childImageSharp___resize___tracedSVG = 'localFile.childImageSharp.resize.tracedSVG',
  localFile___childImageSharp___resize___width = 'localFile.childImageSharp.resize.width',
  localFile___childImageSharp___resize___height = 'localFile.childImageSharp.resize.height',
  localFile___childImageSharp___resize___aspectRatio = 'localFile.childImageSharp.resize.aspectRatio',
  localFile___childImageSharp___resize___originalName = 'localFile.childImageSharp.resize.originalName',
  localFile___childImageSharp___id = 'localFile.childImageSharp.id',
  localFile___childImageSharp___parent___id = 'localFile.childImageSharp.parent.id',
  localFile___childImageSharp___parent___children = 'localFile.childImageSharp.parent.children',
  localFile___childImageSharp___children = 'localFile.childImageSharp.children',
  localFile___childImageSharp___children___id = 'localFile.childImageSharp.children.id',
  localFile___childImageSharp___children___children = 'localFile.childImageSharp.children.children',
  localFile___childImageSharp___internal___content = 'localFile.childImageSharp.internal.content',
  localFile___childImageSharp___internal___contentDigest = 'localFile.childImageSharp.internal.contentDigest',
  localFile___childImageSharp___internal___description = 'localFile.childImageSharp.internal.description',
  localFile___childImageSharp___internal___fieldOwners = 'localFile.childImageSharp.internal.fieldOwners',
  localFile___childImageSharp___internal___ignoreType = 'localFile.childImageSharp.internal.ignoreType',
  localFile___childImageSharp___internal___mediaType = 'localFile.childImageSharp.internal.mediaType',
  localFile___childImageSharp___internal___owner = 'localFile.childImageSharp.internal.owner',
  localFile___childImageSharp___internal___type = 'localFile.childImageSharp.internal.type',
  localFile___id = 'localFile.id',
  localFile___parent___id = 'localFile.parent.id',
  localFile___parent___parent___id = 'localFile.parent.parent.id',
  localFile___parent___parent___children = 'localFile.parent.parent.children',
  localFile___parent___children = 'localFile.parent.children',
  localFile___parent___children___id = 'localFile.parent.children.id',
  localFile___parent___children___children = 'localFile.parent.children.children',
  localFile___parent___internal___content = 'localFile.parent.internal.content',
  localFile___parent___internal___contentDigest = 'localFile.parent.internal.contentDigest',
  localFile___parent___internal___description = 'localFile.parent.internal.description',
  localFile___parent___internal___fieldOwners = 'localFile.parent.internal.fieldOwners',
  localFile___parent___internal___ignoreType = 'localFile.parent.internal.ignoreType',
  localFile___parent___internal___mediaType = 'localFile.parent.internal.mediaType',
  localFile___parent___internal___owner = 'localFile.parent.internal.owner',
  localFile___parent___internal___type = 'localFile.parent.internal.type',
  localFile___children = 'localFile.children',
  localFile___children___id = 'localFile.children.id',
  localFile___children___parent___id = 'localFile.children.parent.id',
  localFile___children___parent___children = 'localFile.children.parent.children',
  localFile___children___children = 'localFile.children.children',
  localFile___children___children___id = 'localFile.children.children.id',
  localFile___children___children___children = 'localFile.children.children.children',
  localFile___children___internal___content = 'localFile.children.internal.content',
  localFile___children___internal___contentDigest = 'localFile.children.internal.contentDigest',
  localFile___children___internal___description = 'localFile.children.internal.description',
  localFile___children___internal___fieldOwners = 'localFile.children.internal.fieldOwners',
  localFile___children___internal___ignoreType = 'localFile.children.internal.ignoreType',
  localFile___children___internal___mediaType = 'localFile.children.internal.mediaType',
  localFile___children___internal___owner = 'localFile.children.internal.owner',
  localFile___children___internal___type = 'localFile.children.internal.type',
  localFile___internal___content = 'localFile.internal.content',
  localFile___internal___contentDigest = 'localFile.internal.contentDigest',
  localFile___internal___description = 'localFile.internal.description',
  localFile___internal___fieldOwners = 'localFile.internal.fieldOwners',
  localFile___internal___ignoreType = 'localFile.internal.ignoreType',
  localFile___internal___mediaType = 'localFile.internal.mediaType',
  localFile___internal___owner = 'localFile.internal.owner',
  localFile___internal___type = 'localFile.internal.type',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type'
}

type SanityImageAssetFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly originalFilename: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sha1hash: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly mimeType: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly assetId: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly metadata: Maybe<SanityImageMetadataFilterInput>;
  readonly source: Maybe<SanityAssetSourceDataFilterInput>;
  readonly fixed: Maybe<SanityImageFixedFilterInput>;
  readonly fluid: Maybe<SanityImageFluidFilterInput>;
  readonly _rawMetadata: Maybe<JSONQueryOperatorInput>;
  readonly _rawSource: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
};

type SanityImageAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityImageAssetEdge>;
  readonly nodes: ReadonlyArray<SanityImageAsset>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityImageAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityImageAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityImageCrop = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly top: Maybe<Scalars['Float']>;
  readonly bottom: Maybe<Scalars['Float']>;
  readonly left: Maybe<Scalars['Float']>;
  readonly right: Maybe<Scalars['Float']>;
};

type SanityImageCropFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly top: Maybe<FloatQueryOperatorInput>;
  readonly bottom: Maybe<FloatQueryOperatorInput>;
  readonly left: Maybe<FloatQueryOperatorInput>;
  readonly right: Maybe<FloatQueryOperatorInput>;
};

type SanityImageDimensions = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Float']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
};

type SanityImageDimensionsFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type SanityImageFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly asset: Maybe<SanityImageAssetFilterInput>;
  readonly hotspot: Maybe<SanityImageHotspotFilterInput>;
  readonly crop: Maybe<SanityImageCropFilterInput>;
};

type SanityImageFilterListInput = {
  readonly elemMatch: Maybe<SanityImageFilterInput>;
};

type SanityImageFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
  readonly srcSet: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
};

type SanityImageFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
};

type SanityImageFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
  readonly srcSet: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Maybe<Scalars['String']>;
};

type SanityImageFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
};

enum SanityImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

type SanityImageHotspot = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly x: Maybe<Scalars['Float']>;
  readonly y: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Float']>;
};

type SanityImageHotspotFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly x: Maybe<FloatQueryOperatorInput>;
  readonly y: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
};

type SanityImageMetadata = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly location: Maybe<SanityGeopoint>;
  readonly dimensions: Maybe<SanityImageDimensions>;
  readonly palette: Maybe<SanityImagePalette>;
  readonly lqip: Maybe<Scalars['String']>;
  readonly hasAlpha: Maybe<Scalars['Boolean']>;
  readonly isOpaque: Maybe<Scalars['Boolean']>;
};

type SanityImageMetadataFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly location: Maybe<SanityGeopointFilterInput>;
  readonly dimensions: Maybe<SanityImageDimensionsFilterInput>;
  readonly palette: Maybe<SanityImagePaletteFilterInput>;
  readonly lqip: Maybe<StringQueryOperatorInput>;
  readonly hasAlpha: Maybe<BooleanQueryOperatorInput>;
  readonly isOpaque: Maybe<BooleanQueryOperatorInput>;
};

type SanityImagePalette = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly darkMuted: Maybe<SanityImagePaletteSwatch>;
  readonly lightVibrant: Maybe<SanityImagePaletteSwatch>;
  readonly darkVibrant: Maybe<SanityImagePaletteSwatch>;
  readonly vibrant: Maybe<SanityImagePaletteSwatch>;
  readonly dominant: Maybe<SanityImagePaletteSwatch>;
  readonly lightMuted: Maybe<SanityImagePaletteSwatch>;
  readonly muted: Maybe<SanityImagePaletteSwatch>;
};

type SanityImagePaletteFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly darkMuted: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly lightVibrant: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly darkVibrant: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly vibrant: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly dominant: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly lightMuted: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly muted: Maybe<SanityImagePaletteSwatchFilterInput>;
};

type SanityImagePaletteSwatch = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
  readonly foreground: Maybe<Scalars['String']>;
  readonly population: Maybe<Scalars['Float']>;
  readonly title: Maybe<Scalars['String']>;
};

type SanityImagePaletteSwatchFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly background: Maybe<StringQueryOperatorInput>;
  readonly foreground: Maybe<StringQueryOperatorInput>;
  readonly population: Maybe<FloatQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
};

type SanityMaterial = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityMaterial__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityMaterial__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SanityMaterialConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityMaterialEdge>;
  readonly nodes: ReadonlyArray<SanityMaterial>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityMaterialGroupConnection>;
};


type SanityMaterialConnection_distinctArgs = {
  field: SanityMaterialFieldsEnum;
};


type SanityMaterialConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityMaterialFieldsEnum;
};

type SanityMaterialEdge = {
  readonly next: Maybe<SanityMaterial>;
  readonly node: SanityMaterial;
  readonly previous: Maybe<SanityMaterial>;
};

enum SanityMaterialFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityMaterialFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityMaterialFilterListInput = {
  readonly elemMatch: Maybe<SanityMaterialFilterInput>;
};

type SanityMaterialGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityMaterialEdge>;
  readonly nodes: ReadonlyArray<SanityMaterial>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityMaterialSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityMaterialFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityProduct = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<SanitySlug>;
  readonly price: Maybe<Scalars['Float']>;
  readonly oldPrice: Maybe<Scalars['Float']>;
  readonly images: Maybe<ReadonlyArray<Maybe<SanityImage>>>;
  readonly sizes: Maybe<SanityProductSizes>;
  readonly materials: Maybe<ReadonlyArray<Maybe<SanityMaterial>>>;
  readonly categories: Maybe<ReadonlyArray<Maybe<SanityCategory>>>;
  readonly body: Maybe<ReadonlyArray<Maybe<SanityBlock>>>;
  readonly _rawSlug: Maybe<Scalars['JSON']>;
  readonly _rawImages: Maybe<Scalars['JSON']>;
  readonly _rawSizes: Maybe<Scalars['JSON']>;
  readonly _rawMaterials: Maybe<Scalars['JSON']>;
  readonly _rawCategories: Maybe<Scalars['JSON']>;
  readonly _rawBody: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityProduct__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityProduct__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityProduct__rawSlugArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityProduct__rawImagesArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityProduct__rawSizesArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityProduct__rawMaterialsArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityProduct__rawCategoriesArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityProduct__rawBodyArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityProductConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityProductEdge>;
  readonly nodes: ReadonlyArray<SanityProduct>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityProductGroupConnection>;
};


type SanityProductConnection_distinctArgs = {
  field: SanityProductFieldsEnum;
};


type SanityProductConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityProductFieldsEnum;
};

type SanityProductEdge = {
  readonly next: Maybe<SanityProduct>;
  readonly node: SanityProduct;
  readonly previous: Maybe<SanityProduct>;
};

enum SanityProductFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  slug____key = 'slug._key',
  slug____type = 'slug._type',
  slug___current = 'slug.current',
  price = 'price',
  oldPrice = 'oldPrice',
  images = 'images',
  images____key = 'images._key',
  images____type = 'images._type',
  images___asset____id = 'images.asset._id',
  images___asset____type = 'images.asset._type',
  images___asset____createdAt = 'images.asset._createdAt',
  images___asset____updatedAt = 'images.asset._updatedAt',
  images___asset____rev = 'images.asset._rev',
  images___asset____key = 'images.asset._key',
  images___asset___originalFilename = 'images.asset.originalFilename',
  images___asset___label = 'images.asset.label',
  images___asset___title = 'images.asset.title',
  images___asset___description = 'images.asset.description',
  images___asset___sha1hash = 'images.asset.sha1hash',
  images___asset___extension = 'images.asset.extension',
  images___asset___mimeType = 'images.asset.mimeType',
  images___asset___size = 'images.asset.size',
  images___asset___assetId = 'images.asset.assetId',
  images___asset___path = 'images.asset.path',
  images___asset___url = 'images.asset.url',
  images___asset___metadata____key = 'images.asset.metadata._key',
  images___asset___metadata____type = 'images.asset.metadata._type',
  images___asset___metadata___lqip = 'images.asset.metadata.lqip',
  images___asset___metadata___hasAlpha = 'images.asset.metadata.hasAlpha',
  images___asset___metadata___isOpaque = 'images.asset.metadata.isOpaque',
  images___asset___source____key = 'images.asset.source._key',
  images___asset___source____type = 'images.asset.source._type',
  images___asset___source___name = 'images.asset.source.name',
  images___asset___source___sanityId = 'images.asset.source.sanityId',
  images___asset___source___url = 'images.asset.source.url',
  images___asset___fixed___base64 = 'images.asset.fixed.base64',
  images___asset___fixed___aspectRatio = 'images.asset.fixed.aspectRatio',
  images___asset___fixed___width = 'images.asset.fixed.width',
  images___asset___fixed___height = 'images.asset.fixed.height',
  images___asset___fixed___src = 'images.asset.fixed.src',
  images___asset___fixed___srcSet = 'images.asset.fixed.srcSet',
  images___asset___fixed___srcWebp = 'images.asset.fixed.srcWebp',
  images___asset___fixed___srcSetWebp = 'images.asset.fixed.srcSetWebp',
  images___asset___fluid___base64 = 'images.asset.fluid.base64',
  images___asset___fluid___aspectRatio = 'images.asset.fluid.aspectRatio',
  images___asset___fluid___src = 'images.asset.fluid.src',
  images___asset___fluid___srcSet = 'images.asset.fluid.srcSet',
  images___asset___fluid___srcWebp = 'images.asset.fluid.srcWebp',
  images___asset___fluid___srcSetWebp = 'images.asset.fluid.srcSetWebp',
  images___asset___fluid___sizes = 'images.asset.fluid.sizes',
  images___asset____rawMetadata = 'images.asset._rawMetadata',
  images___asset____rawSource = 'images.asset._rawSource',
  images___asset___localFile___sourceInstanceName = 'images.asset.localFile.sourceInstanceName',
  images___asset___localFile___absolutePath = 'images.asset.localFile.absolutePath',
  images___asset___localFile___relativePath = 'images.asset.localFile.relativePath',
  images___asset___localFile___extension = 'images.asset.localFile.extension',
  images___asset___localFile___size = 'images.asset.localFile.size',
  images___asset___localFile___prettySize = 'images.asset.localFile.prettySize',
  images___asset___localFile___modifiedTime = 'images.asset.localFile.modifiedTime',
  images___asset___localFile___accessTime = 'images.asset.localFile.accessTime',
  images___asset___localFile___changeTime = 'images.asset.localFile.changeTime',
  images___asset___localFile___birthTime = 'images.asset.localFile.birthTime',
  images___asset___localFile___root = 'images.asset.localFile.root',
  images___asset___localFile___dir = 'images.asset.localFile.dir',
  images___asset___localFile___base = 'images.asset.localFile.base',
  images___asset___localFile___ext = 'images.asset.localFile.ext',
  images___asset___localFile___name = 'images.asset.localFile.name',
  images___asset___localFile___relativeDirectory = 'images.asset.localFile.relativeDirectory',
  images___asset___localFile___dev = 'images.asset.localFile.dev',
  images___asset___localFile___mode = 'images.asset.localFile.mode',
  images___asset___localFile___nlink = 'images.asset.localFile.nlink',
  images___asset___localFile___uid = 'images.asset.localFile.uid',
  images___asset___localFile___gid = 'images.asset.localFile.gid',
  images___asset___localFile___rdev = 'images.asset.localFile.rdev',
  images___asset___localFile___ino = 'images.asset.localFile.ino',
  images___asset___localFile___atimeMs = 'images.asset.localFile.atimeMs',
  images___asset___localFile___mtimeMs = 'images.asset.localFile.mtimeMs',
  images___asset___localFile___ctimeMs = 'images.asset.localFile.ctimeMs',
  images___asset___localFile___atime = 'images.asset.localFile.atime',
  images___asset___localFile___mtime = 'images.asset.localFile.mtime',
  images___asset___localFile___ctime = 'images.asset.localFile.ctime',
  images___asset___localFile___birthtime = 'images.asset.localFile.birthtime',
  images___asset___localFile___birthtimeMs = 'images.asset.localFile.birthtimeMs',
  images___asset___localFile___blksize = 'images.asset.localFile.blksize',
  images___asset___localFile___blocks = 'images.asset.localFile.blocks',
  images___asset___localFile___publicURL = 'images.asset.localFile.publicURL',
  images___asset___localFile___id = 'images.asset.localFile.id',
  images___asset___localFile___children = 'images.asset.localFile.children',
  images___asset___id = 'images.asset.id',
  images___asset___parent___id = 'images.asset.parent.id',
  images___asset___parent___children = 'images.asset.parent.children',
  images___asset___children = 'images.asset.children',
  images___asset___children___id = 'images.asset.children.id',
  images___asset___children___children = 'images.asset.children.children',
  images___asset___internal___content = 'images.asset.internal.content',
  images___asset___internal___contentDigest = 'images.asset.internal.contentDigest',
  images___asset___internal___description = 'images.asset.internal.description',
  images___asset___internal___fieldOwners = 'images.asset.internal.fieldOwners',
  images___asset___internal___ignoreType = 'images.asset.internal.ignoreType',
  images___asset___internal___mediaType = 'images.asset.internal.mediaType',
  images___asset___internal___owner = 'images.asset.internal.owner',
  images___asset___internal___type = 'images.asset.internal.type',
  images___asset___childImageSharp___id = 'images.asset.childImageSharp.id',
  images___asset___childImageSharp___children = 'images.asset.childImageSharp.children',
  images___hotspot____key = 'images.hotspot._key',
  images___hotspot____type = 'images.hotspot._type',
  images___hotspot___x = 'images.hotspot.x',
  images___hotspot___y = 'images.hotspot.y',
  images___hotspot___height = 'images.hotspot.height',
  images___hotspot___width = 'images.hotspot.width',
  images___crop____key = 'images.crop._key',
  images___crop____type = 'images.crop._type',
  images___crop___top = 'images.crop.top',
  images___crop___bottom = 'images.crop.bottom',
  images___crop___left = 'images.crop.left',
  images___crop___right = 'images.crop.right',
  sizes____key = 'sizes._key',
  sizes____type = 'sizes._type',
  sizes___length = 'sizes.length',
  sizes___depth = 'sizes.depth',
  sizes___height = 'sizes.height',
  materials = 'materials',
  materials____id = 'materials._id',
  materials____type = 'materials._type',
  materials____createdAt = 'materials._createdAt',
  materials____updatedAt = 'materials._updatedAt',
  materials____rev = 'materials._rev',
  materials____key = 'materials._key',
  materials___title = 'materials.title',
  materials___id = 'materials.id',
  materials___parent___id = 'materials.parent.id',
  materials___parent___parent___id = 'materials.parent.parent.id',
  materials___parent___parent___children = 'materials.parent.parent.children',
  materials___parent___children = 'materials.parent.children',
  materials___parent___children___id = 'materials.parent.children.id',
  materials___parent___children___children = 'materials.parent.children.children',
  materials___parent___internal___content = 'materials.parent.internal.content',
  materials___parent___internal___contentDigest = 'materials.parent.internal.contentDigest',
  materials___parent___internal___description = 'materials.parent.internal.description',
  materials___parent___internal___fieldOwners = 'materials.parent.internal.fieldOwners',
  materials___parent___internal___ignoreType = 'materials.parent.internal.ignoreType',
  materials___parent___internal___mediaType = 'materials.parent.internal.mediaType',
  materials___parent___internal___owner = 'materials.parent.internal.owner',
  materials___parent___internal___type = 'materials.parent.internal.type',
  materials___children = 'materials.children',
  materials___children___id = 'materials.children.id',
  materials___children___parent___id = 'materials.children.parent.id',
  materials___children___parent___children = 'materials.children.parent.children',
  materials___children___children = 'materials.children.children',
  materials___children___children___id = 'materials.children.children.id',
  materials___children___children___children = 'materials.children.children.children',
  materials___children___internal___content = 'materials.children.internal.content',
  materials___children___internal___contentDigest = 'materials.children.internal.contentDigest',
  materials___children___internal___description = 'materials.children.internal.description',
  materials___children___internal___fieldOwners = 'materials.children.internal.fieldOwners',
  materials___children___internal___ignoreType = 'materials.children.internal.ignoreType',
  materials___children___internal___mediaType = 'materials.children.internal.mediaType',
  materials___children___internal___owner = 'materials.children.internal.owner',
  materials___children___internal___type = 'materials.children.internal.type',
  materials___internal___content = 'materials.internal.content',
  materials___internal___contentDigest = 'materials.internal.contentDigest',
  materials___internal___description = 'materials.internal.description',
  materials___internal___fieldOwners = 'materials.internal.fieldOwners',
  materials___internal___ignoreType = 'materials.internal.ignoreType',
  materials___internal___mediaType = 'materials.internal.mediaType',
  materials___internal___owner = 'materials.internal.owner',
  materials___internal___type = 'materials.internal.type',
  categories = 'categories',
  categories____id = 'categories._id',
  categories____type = 'categories._type',
  categories____createdAt = 'categories._createdAt',
  categories____updatedAt = 'categories._updatedAt',
  categories____rev = 'categories._rev',
  categories____key = 'categories._key',
  categories___title = 'categories.title',
  categories___slug____key = 'categories.slug._key',
  categories___slug____type = 'categories.slug._type',
  categories___slug___current = 'categories.slug.current',
  categories___description = 'categories.description',
  categories___parents = 'categories.parents',
  categories___parents____id = 'categories.parents._id',
  categories___parents____type = 'categories.parents._type',
  categories___parents____createdAt = 'categories.parents._createdAt',
  categories___parents____updatedAt = 'categories.parents._updatedAt',
  categories___parents____rev = 'categories.parents._rev',
  categories___parents____key = 'categories.parents._key',
  categories___parents___title = 'categories.parents.title',
  categories___parents___slug____key = 'categories.parents.slug._key',
  categories___parents___slug____type = 'categories.parents.slug._type',
  categories___parents___slug___current = 'categories.parents.slug.current',
  categories___parents___description = 'categories.parents.description',
  categories___parents___parents = 'categories.parents.parents',
  categories___parents___parents____id = 'categories.parents.parents._id',
  categories___parents___parents____type = 'categories.parents.parents._type',
  categories___parents___parents____createdAt = 'categories.parents.parents._createdAt',
  categories___parents___parents____updatedAt = 'categories.parents.parents._updatedAt',
  categories___parents___parents____rev = 'categories.parents.parents._rev',
  categories___parents___parents____key = 'categories.parents.parents._key',
  categories___parents___parents___title = 'categories.parents.parents.title',
  categories___parents___parents___description = 'categories.parents.parents.description',
  categories___parents___parents___parents = 'categories.parents.parents.parents',
  categories___parents___parents____rawSlug = 'categories.parents.parents._rawSlug',
  categories___parents___parents____rawParents = 'categories.parents.parents._rawParents',
  categories___parents___parents____rawImage = 'categories.parents.parents._rawImage',
  categories___parents___parents___id = 'categories.parents.parents.id',
  categories___parents___parents___children = 'categories.parents.parents.children',
  categories___parents___image____key = 'categories.parents.image._key',
  categories___parents___image____type = 'categories.parents.image._type',
  categories___parents____rawSlug = 'categories.parents._rawSlug',
  categories___parents____rawParents = 'categories.parents._rawParents',
  categories___parents____rawImage = 'categories.parents._rawImage',
  categories___parents___id = 'categories.parents.id',
  categories___parents___parent___id = 'categories.parents.parent.id',
  categories___parents___parent___children = 'categories.parents.parent.children',
  categories___parents___children = 'categories.parents.children',
  categories___parents___children___id = 'categories.parents.children.id',
  categories___parents___children___children = 'categories.parents.children.children',
  categories___parents___internal___content = 'categories.parents.internal.content',
  categories___parents___internal___contentDigest = 'categories.parents.internal.contentDigest',
  categories___parents___internal___description = 'categories.parents.internal.description',
  categories___parents___internal___fieldOwners = 'categories.parents.internal.fieldOwners',
  categories___parents___internal___ignoreType = 'categories.parents.internal.ignoreType',
  categories___parents___internal___mediaType = 'categories.parents.internal.mediaType',
  categories___parents___internal___owner = 'categories.parents.internal.owner',
  categories___parents___internal___type = 'categories.parents.internal.type',
  categories___image____key = 'categories.image._key',
  categories___image____type = 'categories.image._type',
  categories___image___asset____id = 'categories.image.asset._id',
  categories___image___asset____type = 'categories.image.asset._type',
  categories___image___asset____createdAt = 'categories.image.asset._createdAt',
  categories___image___asset____updatedAt = 'categories.image.asset._updatedAt',
  categories___image___asset____rev = 'categories.image.asset._rev',
  categories___image___asset____key = 'categories.image.asset._key',
  categories___image___asset___originalFilename = 'categories.image.asset.originalFilename',
  categories___image___asset___label = 'categories.image.asset.label',
  categories___image___asset___title = 'categories.image.asset.title',
  categories___image___asset___description = 'categories.image.asset.description',
  categories___image___asset___sha1hash = 'categories.image.asset.sha1hash',
  categories___image___asset___extension = 'categories.image.asset.extension',
  categories___image___asset___mimeType = 'categories.image.asset.mimeType',
  categories___image___asset___size = 'categories.image.asset.size',
  categories___image___asset___assetId = 'categories.image.asset.assetId',
  categories___image___asset___path = 'categories.image.asset.path',
  categories___image___asset___url = 'categories.image.asset.url',
  categories___image___asset____rawMetadata = 'categories.image.asset._rawMetadata',
  categories___image___asset____rawSource = 'categories.image.asset._rawSource',
  categories___image___asset___id = 'categories.image.asset.id',
  categories___image___asset___children = 'categories.image.asset.children',
  categories___image___hotspot____key = 'categories.image.hotspot._key',
  categories___image___hotspot____type = 'categories.image.hotspot._type',
  categories___image___hotspot___x = 'categories.image.hotspot.x',
  categories___image___hotspot___y = 'categories.image.hotspot.y',
  categories___image___hotspot___height = 'categories.image.hotspot.height',
  categories___image___hotspot___width = 'categories.image.hotspot.width',
  categories___image___crop____key = 'categories.image.crop._key',
  categories___image___crop____type = 'categories.image.crop._type',
  categories___image___crop___top = 'categories.image.crop.top',
  categories___image___crop___bottom = 'categories.image.crop.bottom',
  categories___image___crop___left = 'categories.image.crop.left',
  categories___image___crop___right = 'categories.image.crop.right',
  categories____rawSlug = 'categories._rawSlug',
  categories____rawParents = 'categories._rawParents',
  categories____rawImage = 'categories._rawImage',
  categories___id = 'categories.id',
  categories___parent___id = 'categories.parent.id',
  categories___parent___parent___id = 'categories.parent.parent.id',
  categories___parent___parent___children = 'categories.parent.parent.children',
  categories___parent___children = 'categories.parent.children',
  categories___parent___children___id = 'categories.parent.children.id',
  categories___parent___children___children = 'categories.parent.children.children',
  categories___parent___internal___content = 'categories.parent.internal.content',
  categories___parent___internal___contentDigest = 'categories.parent.internal.contentDigest',
  categories___parent___internal___description = 'categories.parent.internal.description',
  categories___parent___internal___fieldOwners = 'categories.parent.internal.fieldOwners',
  categories___parent___internal___ignoreType = 'categories.parent.internal.ignoreType',
  categories___parent___internal___mediaType = 'categories.parent.internal.mediaType',
  categories___parent___internal___owner = 'categories.parent.internal.owner',
  categories___parent___internal___type = 'categories.parent.internal.type',
  categories___children = 'categories.children',
  categories___children___id = 'categories.children.id',
  categories___children___parent___id = 'categories.children.parent.id',
  categories___children___parent___children = 'categories.children.parent.children',
  categories___children___children = 'categories.children.children',
  categories___children___children___id = 'categories.children.children.id',
  categories___children___children___children = 'categories.children.children.children',
  categories___children___internal___content = 'categories.children.internal.content',
  categories___children___internal___contentDigest = 'categories.children.internal.contentDigest',
  categories___children___internal___description = 'categories.children.internal.description',
  categories___children___internal___fieldOwners = 'categories.children.internal.fieldOwners',
  categories___children___internal___ignoreType = 'categories.children.internal.ignoreType',
  categories___children___internal___mediaType = 'categories.children.internal.mediaType',
  categories___children___internal___owner = 'categories.children.internal.owner',
  categories___children___internal___type = 'categories.children.internal.type',
  categories___internal___content = 'categories.internal.content',
  categories___internal___contentDigest = 'categories.internal.contentDigest',
  categories___internal___description = 'categories.internal.description',
  categories___internal___fieldOwners = 'categories.internal.fieldOwners',
  categories___internal___ignoreType = 'categories.internal.ignoreType',
  categories___internal___mediaType = 'categories.internal.mediaType',
  categories___internal___owner = 'categories.internal.owner',
  categories___internal___type = 'categories.internal.type',
  body = 'body',
  body____key = 'body._key',
  body____type = 'body._type',
  body___sanityChildren = 'body.sanityChildren',
  body___sanityChildren____key = 'body.sanityChildren._key',
  body___sanityChildren____type = 'body.sanityChildren._type',
  body___sanityChildren___marks = 'body.sanityChildren.marks',
  body___sanityChildren___text = 'body.sanityChildren.text',
  body___style = 'body.style',
  body___list = 'body.list',
  _rawSlug = '_rawSlug',
  _rawImages = '_rawImages',
  _rawSizes = '_rawSizes',
  _rawMaterials = '_rawMaterials',
  _rawCategories = '_rawCategories',
  _rawBody = '_rawBody',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityProductFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<SanitySlugFilterInput>;
  readonly price: Maybe<FloatQueryOperatorInput>;
  readonly oldPrice: Maybe<FloatQueryOperatorInput>;
  readonly images: Maybe<SanityImageFilterListInput>;
  readonly sizes: Maybe<SanityProductSizesFilterInput>;
  readonly materials: Maybe<SanityMaterialFilterListInput>;
  readonly categories: Maybe<SanityCategoryFilterListInput>;
  readonly body: Maybe<SanityBlockFilterListInput>;
  readonly _rawSlug: Maybe<JSONQueryOperatorInput>;
  readonly _rawImages: Maybe<JSONQueryOperatorInput>;
  readonly _rawSizes: Maybe<JSONQueryOperatorInput>;
  readonly _rawMaterials: Maybe<JSONQueryOperatorInput>;
  readonly _rawCategories: Maybe<JSONQueryOperatorInput>;
  readonly _rawBody: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityProductGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityProductEdge>;
  readonly nodes: ReadonlyArray<SanityProduct>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityProductSizes = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly length: Maybe<Scalars['Float']>;
  readonly depth: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
};

type SanityProductSizesFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly length: Maybe<FloatQueryOperatorInput>;
  readonly depth: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
};

type SanityProductSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityProductFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  readonly maxDepth: Scalars['Int'];
};

type SanitySiteSettings = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly emails: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly phoneNumbers: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly addresses: Maybe<ReadonlyArray<Maybe<SanityAddress>>>;
  readonly _rawAddresses: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanitySiteSettings__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanitySiteSettings__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanitySiteSettings__rawAddressesArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanitySiteSettingsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanitySiteSettingsEdge>;
  readonly nodes: ReadonlyArray<SanitySiteSettings>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanitySiteSettingsGroupConnection>;
};


type SanitySiteSettingsConnection_distinctArgs = {
  field: SanitySiteSettingsFieldsEnum;
};


type SanitySiteSettingsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanitySiteSettingsFieldsEnum;
};

type SanitySiteSettingsEdge = {
  readonly next: Maybe<SanitySiteSettings>;
  readonly node: SanitySiteSettings;
  readonly previous: Maybe<SanitySiteSettings>;
};

enum SanitySiteSettingsFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  description = 'description',
  keywords = 'keywords',
  emails = 'emails',
  phoneNumbers = 'phoneNumbers',
  addresses = 'addresses',
  addresses____key = 'addresses._key',
  addresses____type = 'addresses._type',
  addresses___street = 'addresses.street',
  addresses___streetNo = 'addresses.streetNo',
  addresses___city = 'addresses.city',
  addresses___location____key = 'addresses.location._key',
  addresses___location____type = 'addresses.location._type',
  addresses___location___lat = 'addresses.location.lat',
  addresses___location___lng = 'addresses.location.lng',
  addresses___location___alt = 'addresses.location.alt',
  _rawAddresses = '_rawAddresses',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanitySiteSettingsFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
  readonly emails: Maybe<StringQueryOperatorInput>;
  readonly phoneNumbers: Maybe<StringQueryOperatorInput>;
  readonly addresses: Maybe<SanityAddressFilterListInput>;
  readonly _rawAddresses: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanitySiteSettingsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanitySiteSettingsEdge>;
  readonly nodes: ReadonlyArray<SanitySiteSettings>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanitySiteSettingsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanitySiteSettingsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanitySlug = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly current: Maybe<Scalars['String']>;
};

type SanitySlugFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly current: Maybe<StringQueryOperatorInput>;
};

type SanitySpan = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly marks: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly text: Maybe<Scalars['String']>;
};

type SanitySpanFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly marks: Maybe<StringQueryOperatorInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
};

type SanitySpanFilterListInput = {
  readonly elemMatch: Maybe<SanitySpanFilterInput>;
};

enum SanityTransformImagesImageFormat {
  JPG = 'jpg',
  PJPG = 'pjpg',
  PNG = 'png',
  WEBP = 'webp'
}

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  buildTime = 'buildTime'
}

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___siteUrl = 'siteMetadata.siteUrl',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageContext = {
  readonly slug: Maybe<Scalars['String']>;
};

type SitePageContextFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___slug = 'context.slug',
  pluginCreator___id = 'pluginCreator.id',
  pluginCreator___parent___id = 'pluginCreator.parent.id',
  pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
  pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
  pluginCreator___parent___children = 'pluginCreator.parent.children',
  pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
  pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
  pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
  pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
  pluginCreator___children = 'pluginCreator.children',
  pluginCreator___children___id = 'pluginCreator.children.id',
  pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
  pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
  pluginCreator___children___children = 'pluginCreator.children.children',
  pluginCreator___children___children___id = 'pluginCreator.children.children.id',
  pluginCreator___children___children___children = 'pluginCreator.children.children.children',
  pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
  pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
  pluginCreator___internal___content = 'pluginCreator.internal.content',
  pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
  pluginCreator___internal___description = 'pluginCreator.internal.description',
  pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
  pluginCreator___internal___owner = 'pluginCreator.internal.owner',
  pluginCreator___internal___type = 'pluginCreator.internal.type',
  pluginCreator___resolve = 'pluginCreator.resolve',
  pluginCreator___name = 'pluginCreator.name',
  pluginCreator___version = 'pluginCreator.version',
  pluginCreator___pluginOptions___emitSchema___src___generated___gatsby_schema_graphql = 'pluginCreator.pluginOptions.emitSchema.src___generated___gatsby_schema_graphql',
  pluginCreator___pluginOptions___emitPluginDocuments___src___generated___gatsby_plugin_documents_graphql = 'pluginCreator.pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql',
  pluginCreator___pluginOptions___fonts___google = 'pluginCreator.pluginOptions.fonts.google',
  pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
  pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
  pluginCreator___pluginOptions___projectId = 'pluginCreator.pluginOptions.projectId',
  pluginCreator___pluginOptions___dataset = 'pluginCreator.pluginOptions.dataset',
  pluginCreator___pluginOptions___token = 'pluginCreator.pluginOptions.token',
  pluginCreator___pluginOptions___overlayDrafts = 'pluginCreator.pluginOptions.overlayDrafts',
  pluginCreator___pluginOptions___watchMode = 'pluginCreator.pluginOptions.watchMode',
  pluginCreator___pluginOptions___short_name = 'pluginCreator.pluginOptions.short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator.pluginOptions.start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator.pluginOptions.background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator.pluginOptions.theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator.pluginOptions.display',
  pluginCreator___pluginOptions___icon = 'pluginCreator.pluginOptions.icon',
  pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator.pluginOptions.cache_busting_mode',
  pluginCreator___pluginOptions___include_favicon = 'pluginCreator.pluginOptions.include_favicon',
  pluginCreator___pluginOptions___legacy = 'pluginCreator.pluginOptions.legacy',
  pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator.pluginOptions.theme_color_in_head',
  pluginCreator___pluginOptions___cacheDigest = 'pluginCreator.pluginOptions.cacheDigest',
  pluginCreator___pluginOptions___trackingId = 'pluginCreator.pluginOptions.trackingId',
  pluginCreator___pluginOptions___webvisor = 'pluginCreator.pluginOptions.webvisor',
  pluginCreator___pluginOptions___query = 'pluginCreator.pluginOptions.query',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
  pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
  pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
  pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
  pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
  pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
  pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___emitSchema___src___generated___gatsby_schema_graphql = 'pluginOptions.emitSchema.src___generated___gatsby_schema_graphql',
  pluginOptions___emitPluginDocuments___src___generated___gatsby_plugin_documents_graphql = 'pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql',
  pluginOptions___fonts___google = 'pluginOptions.fonts.google',
  pluginOptions___fonts___google___family = 'pluginOptions.fonts.google.family',
  pluginOptions___fonts___google___subsets = 'pluginOptions.fonts.google.subsets',
  pluginOptions___fonts___google___variants = 'pluginOptions.fonts.google.variants',
  pluginOptions___name = 'pluginOptions.name',
  pluginOptions___path = 'pluginOptions.path',
  pluginOptions___projectId = 'pluginOptions.projectId',
  pluginOptions___dataset = 'pluginOptions.dataset',
  pluginOptions___token = 'pluginOptions.token',
  pluginOptions___overlayDrafts = 'pluginOptions.overlayDrafts',
  pluginOptions___watchMode = 'pluginOptions.watchMode',
  pluginOptions___short_name = 'pluginOptions.short_name',
  pluginOptions___start_url = 'pluginOptions.start_url',
  pluginOptions___background_color = 'pluginOptions.background_color',
  pluginOptions___theme_color = 'pluginOptions.theme_color',
  pluginOptions___display = 'pluginOptions.display',
  pluginOptions___icon = 'pluginOptions.icon',
  pluginOptions___cache_busting_mode = 'pluginOptions.cache_busting_mode',
  pluginOptions___include_favicon = 'pluginOptions.include_favicon',
  pluginOptions___legacy = 'pluginOptions.legacy',
  pluginOptions___theme_color_in_head = 'pluginOptions.theme_color_in_head',
  pluginOptions___cacheDigest = 'pluginOptions.cacheDigest',
  pluginOptions___trackingId = 'pluginOptions.trackingId',
  pluginOptions___webvisor = 'pluginOptions.webvisor',
  pluginOptions___query = 'pluginOptions.query',
  pluginOptions___pathCheck = 'pluginOptions.pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson.name',
  packageJson___description = 'packageJson.description',
  packageJson___version = 'packageJson.version',
  packageJson___main = 'packageJson.main',
  packageJson___license = 'packageJson.license',
  packageJson___dependencies = 'packageJson.dependencies',
  packageJson___dependencies___name = 'packageJson.dependencies.name',
  packageJson___dependencies___version = 'packageJson.dependencies.version',
  packageJson___devDependencies = 'packageJson.devDependencies',
  packageJson___devDependencies___name = 'packageJson.devDependencies.name',
  packageJson___devDependencies___version = 'packageJson.devDependencies.version',
  packageJson___peerDependencies = 'packageJson.peerDependencies',
  packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
  packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
  packageJson___keywords = 'packageJson.keywords'
}

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPluginOptions = {
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocuments>;
  readonly fonts: Maybe<SitePluginPluginOptionsFonts>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly projectId: Maybe<Scalars['String']>;
  readonly dataset: Maybe<Scalars['String']>;
  readonly token: Maybe<Scalars['String']>;
  readonly overlayDrafts: Maybe<Scalars['Boolean']>;
  readonly watchMode: Maybe<Scalars['Boolean']>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly trackingId: Maybe<Scalars['String']>;
  readonly webvisor: Maybe<Scalars['Boolean']>;
  readonly query: Maybe<Scalars['String']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocuments = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocumentsFilterInput = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitSchema = {
  readonly src___generated___gatsby_schema_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly src___generated___gatsby_schema_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocumentsFilterInput>;
  readonly fonts: Maybe<SitePluginPluginOptionsFontsFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly projectId: Maybe<StringQueryOperatorInput>;
  readonly dataset: Maybe<StringQueryOperatorInput>;
  readonly token: Maybe<StringQueryOperatorInput>;
  readonly overlayDrafts: Maybe<BooleanQueryOperatorInput>;
  readonly watchMode: Maybe<BooleanQueryOperatorInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly trackingId: Maybe<StringQueryOperatorInput>;
  readonly webvisor: Maybe<BooleanQueryOperatorInput>;
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsFonts = {
  readonly google: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsFontsGoogle>>>;
};

type SitePluginPluginOptionsFontsFilterInput = {
  readonly google: Maybe<SitePluginPluginOptionsFontsGoogleFilterListInput>;
};

type SitePluginPluginOptionsFontsGoogle = {
  readonly family: Maybe<Scalars['String']>;
  readonly subsets: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly variants: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPluginOptionsFontsGoogleFilterInput = {
  readonly family: Maybe<StringQueryOperatorInput>;
  readonly subsets: Maybe<StringQueryOperatorInput>;
  readonly variants: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsFontsGoogleFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsFontsGoogleFilterInput>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly siteUrl: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFilterInput = {
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type HeroQueryVariables = {};


type HeroQuery = { readonly ourServicesBgImg: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> };

type YandexMapQueryVariables = {};


type YandexMapQuery = { readonly allSanitySiteSettings: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<SanitySiteSettings, 'title'>
        & { readonly addresses: Maybe<ReadonlyArray<Maybe<(
          Pick<SanityAddress, 'street' | 'streetNo' | 'city'>
          & { readonly location: Maybe<Pick<SanityGeopoint, 'lat' | 'lng'>> }
        )>>> }
      ) }> } };

type ProductsQueryVariables = {};


type ProductsQuery = { readonly allSanityProduct: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<SanityProduct, '_id' | 'title' | 'price' | 'oldPrice'>
        & { readonly slug: Maybe<Pick<SanitySlug, 'current'>>, readonly images: Maybe<ReadonlyArray<Maybe<{ readonly asset: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebpFragment> }> }> }> }>>> }
      ) }> } };

type SiteMetadataQueryVariables = {};


type SiteMetadataQuery = { readonly allSanitySiteSettings: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<SanitySiteSettings, 'title' | 'description' | 'keywords' | 'emails' | 'phoneNumbers'>
        & { readonly addresses: Maybe<ReadonlyArray<Maybe<(
          Pick<SanityAddress, 'street' | 'streetNo' | 'city'>
          & { readonly location: Maybe<Pick<SanityGeopoint, 'lat' | 'lng' | 'alt'>> }
        )>>> }
      ) }> } };

type PostQueryVariables = {
  slug: Maybe<Scalars['String']>;
};


type PostQuery = { readonly sanityProduct: Maybe<(
    Pick<SanityProduct, '_id' | 'title' | 'price' | 'oldPrice' | '_rawBody'>
    & { readonly sizes: Maybe<Pick<SanityProductSizes, 'depth' | 'height' | 'length'>>, readonly materials: Maybe<ReadonlyArray<Maybe<Pick<SanityMaterial, 'title'>>>>, readonly images: Maybe<ReadonlyArray<Maybe<(
      Pick<SanityImage, '_key'>
      & { readonly asset: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebpFragment> }> }> }> }
    )>>> }
  )> };

type GatsbySanityImageFixedFragment = Pick<SanityImageFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbySanityImageFixed_noBase64Fragment = Pick<SanityImageFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbySanityImageFixed_withWebpFragment = Pick<SanityImageFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbySanityImageFixed_withWebp_noBase64Fragment = Pick<SanityImageFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbySanityImageFluidFragment = Pick<SanityImageFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbySanityImageFluid_noBase64Fragment = Pick<SanityImageFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbySanityImageFluid_withWebpFragment = Pick<SanityImageFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbySanityImageFluid_withWebp_noBase64Fragment = Pick<SanityImageFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_withWebp_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebp_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

}