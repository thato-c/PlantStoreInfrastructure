import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog.model';

@Injectable({
    providedIn: 'root'
})
export class BlogService{
    private blogPosts: BlogPost[] = [
        {id: 1, title: 'Introduction to Angular', author: 'Me', date: '2025-08-26', content: 'Angular is a platform for building mobile and desktop web applications...'},
        {id: 2, title: 'Introduction to TypeScript', author: 'Me', date: '2025-08-26', content: 'Angular is a platform for building mobile and desktop web applications...'},
        {id: 3, title: 'Introduction to Vue', author: 'Me', date: '2025-08-26', content: 'Angular is a platform for building mobile and desktop web applications...'},
        {id: 4, title: 'Introduction to React', author: 'Me', date: '2025-08-26', content: 'Angular is a platform for building mobile and desktop web applications...'},
        {id: 5, title: 'Introduction to Asp.Net', author: 'Me', date: '2025-08-26', content: 'Angular is a platform for building mobile and desktop web applications...'},
        {id: 6, title: 'Introduction to C#', author: 'Me', date: '2025-08-26', content: 'Angular is a platform for building mobile and desktop web applications...'},
        {id: 7, title: 'Introduction to Python', author: 'Me', date: '2025-08-26', content: 'Angular is a platform for building mobile and desktop web applications...'},
        {id: 8, title: 'Introduction to Java', author: 'Me', date: '2025-08-26', content: 'Angular is a platform for building mobile and desktop web applications...'},
        {id: 9, title: 'Introduction to C', author: 'Me', date: '2025-08-26', content: 'Angular is a platform for building mobile and desktop web applications...'},
        {id: 10, title: 'Introduction to C++', author: 'Me', date: '2025-08-26', content: 'Angular is a platform for building mobile and desktop web applications...'},
    ];

    constructor(){}

    getAllPosts(): BlogPost[]{
        return this.blogPosts;
    }

    getPostsById(id:number): BlogPost | undefined{
        return this.blogPosts.find(post => post.id === id);
    }
}