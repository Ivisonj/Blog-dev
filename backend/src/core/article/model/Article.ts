import Entity from "@/core/shared/Entity"

interface ArticleProps {
    id?: string
    title: string
    subtitle: string
    userId: string
    content: string
}

export default class Article extends Entity {
    readonly props: ArticleProps

    constructor(props: ArticleProps) {
        super(props.id!)
        this.props = props    
    } 
} 