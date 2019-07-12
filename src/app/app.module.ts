import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatProgressSpinnerModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
// Translations
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// Components
import { VenuesComponent } from './venues/venues.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { InfoDialogComponent } from './search/info-dialog/info-dialog.component';
import { ShareUrlDialogComponent } from './details/share-url-dialog/share-url-dialog.component';
import { DirectionsComponent } from './directions/directions.component';

// Services
import { GoogleMapService } from './services/google-map.service';
import { AppConfigService } from './services/app-config.service';
import { VenueService } from './services/venue.service';
import { LocationService } from './services/location.service';
import { MapsIndoorsService } from './services/maps-indoors.service';
import { DirectionService } from './services/direction.service';
import { SolutionService } from './services/solution.service';
import { HorizontalDirectionsComponent } from './directives/horizontal-directions/horizontal-directions.component';
import { TrackerDirective } from './directives/ga-tracker/tracker.directive';
import { LocationImgComponent } from './shared/components/location-img/location-img.component';

@NgModule({
	declarations: [
		AppComponent,
		VenuesComponent,
		SearchComponent,
		DetailsComponent,
		InfoDialogComponent,
		ShareUrlDialogComponent,
		DirectionsComponent,
		HorizontalDirectionsComponent,
		TrackerDirective,
		LocationImgComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatSnackBarModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
		MatProgressSpinnerModule,
		MatDialogModule,
		MatCheckboxModule,
		AppRoutingModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		})
	],
	exports: [
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatRippleModule,
		MatDialogModule,
	],
	providers: [
		SolutionService,
		AppConfigService, 
		{
			provide: APP_INITIALIZER,
			useFactory: solutionProviderFactory, 
			multi: true,
			deps: [SolutionService]
		},
	],
	bootstrap: [
		AppComponent
	],
	entryComponents: [
		InfoDialogComponent,
		ShareUrlDialogComponent
	]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

export function solutionProviderFactory(provider: SolutionService) {
	return () => provider.initializeApp();
}