export default interface Article {
    id?: string
    title: string
    description: string
    imageUrl: string
    createdAt?: Date
    category: 'web' | 'mobile' | 'desktop' | 'ai'
    author: string 
    userId: string
    content: string
} 
