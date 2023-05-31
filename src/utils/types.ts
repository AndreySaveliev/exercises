export type exercises = exercise[]

export type exercise = {
  bodyPart: "string"
  equipment: "string"
  gifUrl: "string"
  id: "string"
  name: "string"
  target: "string"
}

export type fetchedYTData = {
  contents: {
    video: videoType
  }[]
}

export type videoType = {
  videoId: string,
  title: string,
  description: string,
  thumbnails: {
    height: number
    url: string
    width: number
  }[]
}
