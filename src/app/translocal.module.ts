import { NgModule } from '@angular/core';
import { TRANSLOCO_CONFIG, TranslocoModule } from '@ngneat/transloco';


export const config: any = {
    defaultLang: 'en',
    prodMode: false,
    availableLangs: ['en', 'vn'],
    reRenderOnLangChange: true,
    fallbackLang: 'en'
}

@NgModule({
    imports: [
        TranslocoModule
    ],
    providers: [{
        provide: TRANSLOCO_CONFIG,
        useValue: config
    }],
})

export class LocalizationModule { }
