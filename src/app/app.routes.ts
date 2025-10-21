import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FeatureFilmsComponent } from './pages/FILMS/feature-films/feature-films.component';
import { ShortFilmsComponent } from './pages/FILMS/short-films/short-films.component';
import { SeriesComponent } from './pages/FILMS/series/series.component';
import { SparkshortsComponent } from './pages/FILMS/sparkshorts/sparkshorts.component';
import { DocumentariesComponent } from './pages/FILMS/documentaries/documentaries.component';
import { TechAtPixarComponent } from './pages/TECHNOLOGY/tech-at-pixar/tech-at-pixar.component';
import { RendermanComponent } from './pages/TECHNOLOGY/renderman/renderman.component';
import { OpenusdComponent } from './pages/TECHNOLOGY/openusd/openusd.component';
import { SoftwareRdComponent } from './pages/TECHNOLOGY/software-rd/software-rd.component';
import { TechnologyLibrariesComponent } from './pages/TECHNOLOGY/technology-libraries/technology-libraries.component';
import { CareersComponent } from './pages/CAREERS/careers-at-pixar/careers.component';
import { InternshipsComponent } from './pages/CAREERS/internships/internships.component';
import { LifeAtPixarComponent } from './pages/CAREERS/life-at-pixar/life-at-pixar.component';
import { LeadersComponent } from './pages/MORE/leaders/leaders.component';
import { OurStoryComponent } from './pages/MORE/our-story/our-story.component';
import { EventsComponent } from './pages/MORE/events-page/events.component';
import { PixarInABoxComponent } from './pages/MORE/pixar-in-a-box/pixar-in-a-box.component';
import { FaqsComponent } from './pages/MORE/faqs/faqs.component';

export const routes: Routes = [
    { 
        path: '',
        component: HomeComponent
    },
    { 
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'feature-films',
        component: FeatureFilmsComponent
    },
    {
        path: 'short-films',
        component: ShortFilmsComponent
    },
    {
        path: 'series',
        component: SeriesComponent
    },
    {
        path: 'sparkshorts',
        component: SparkshortsComponent
    },
    {
        path: 'documentaries',
        component: DocumentariesComponent
    },
    {
        path: 'technology-at-pixar',
        component: TechAtPixarComponent
    },
    {
        path: 'renderman',
        component: RendermanComponent
    },
    {
        path: 'openusd',
        component: OpenusdComponent
    },
    {
        path: 'software-rd',
        component: SoftwareRdComponent
    },
    {
        path: 'technology-libraries',
        component: TechnologyLibrariesComponent
    },
    {
        path: 'careers',
        component: CareersComponent
    },
    {
        path: 'internships',
        component: InternshipsComponent
    },
    {
        path: 'life-at-pixar',
        component: LifeAtPixarComponent
    },
    {
        path: 'leaders',
        component: LeadersComponent
    },
    {
        path: 'our-story',
        component: OurStoryComponent
    },
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: 'pixar-in-a-box',
        component: PixarInABoxComponent
    },
    {
        path: 'faqs',
        component: FaqsComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
