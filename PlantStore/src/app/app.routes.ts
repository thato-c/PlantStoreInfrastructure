import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
    {path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)},
    {path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)},
    {path: 'store', loadComponent: () => import('./store/store.component').then(m => m.StoreComponent)},

    // Blog (SSG)
    {path: 'blog', loadComponent: () => import('./blog/blog-list/blog-list.component').then(m => m.BlogListComponent)},
    {path: 'blog/:id', loadComponent: () => import('./blog/blog-post/blog-post.component').then(m => m.BlogPostComponent)}
];
