export interface Application {
  id: string
  title: string
  description: string
  solution: string
  relatedTags: string[]
  order: number
}

export interface ApplicationData {
  applications: Application[]
  content: string
}