export default interface Article {
    id?: string
    title: string
    description: string
    imageUrl?: string
    category: 'web' | 'mobile' | 'desktop' | 'ai' 
    userId: string
    content: string
} 
