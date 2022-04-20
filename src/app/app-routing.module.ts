import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApfelkuchenmitgussComponent } from './apfelkuchenmitguss/apfelkuchenmitguss.component';
import { ApfelschmandtartelettesmiteierlikoerComponent } from './apfelschmandtartelettesmiteierlikoer/apfelschmandtartelettesmiteierlikoer.component';
import { BananendoerrenComponent } from './bananendoerren/bananendoerren.component';
import { FruechtedoerrenComponent } from './fruechtedoerren/fruechtedoerren.component';
import { HomeComponent } from './home/home.component';
import { MangodoerrenComponent } from './mangodoerren/mangodoerren.component';
import { MeinerezepteComponent } from './meinerezepte/meinerezepte.component';
import { PapayadoerrenComponent } from './papayadoerren/papayadoerren.component';
import { KaiserschmarrnComponent } from './kaiserschmarrn/kaiserschmarrn.component';
import { ReiswaffeltomatensnackComponent } from './reiswaffeltomatensnack/reiswaffeltomatensnack.component';
import { SchokobananenbrotComponent } from './schokobananenbrot/schokobananenbrot.component';
import { WeltmeisterbrotComponent } from './weltmeisterbrot/weltmeisterbrot.component';
import { MoehreneintopfComponent } from './moehreneintopf/moehreneintopf.component';
import { ApfelmusComponent } from './apfelmus/apfelmus.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { OfenMakkaroniComponent } from './ofen-makkaroni/ofen-makkaroni.component';
import { PinacoladaComponent } from './pinacolada/pinacolada.component';
import { MojitoComponent } from './mojito/mojito.component';
import { BananenpancakesComponent } from './bananenpancakes/bananenpancakes.component';
import { GriessbreiComponent } from './griessbrei/griessbrei.component';
import { BasilikumpestoComponent } from './basilikumpesto/basilikumpesto.component';
import { KartottengruenpestoComponent } from './kartottengruenpesto/kartottengruenpesto.component';
import { ReisnudelsalattomatemozzarellaComponent } from './reisnudelsalattomatemozzarella/reisnudelsalattomatemozzarella.component';
import { MangoramazottidrinkComponent } from './mangoramazottidrink/mangoramazottidrink.component';
import { CouscoussalatComponent } from './couscoussalat/couscoussalat.component';
import { KartoffelsalatComponent } from './kartoffelsalat/kartoffelsalat.component';
import { MarmorkuchenComponent } from './marmorkuchen/marmorkuchen.component';
import { RosinenkuchenComponent } from './rosinenkuchen/rosinenkuchen.component';
import { EierlikoerkuchenComponent } from './eierlikoerkuchen/eierlikoerkuchen.component';
import { SchokoladenkuchenComponent } from './schokoladenkuchen/schokoladenkuchen.component';
import { NudelsalaterbsenmoehrenComponent } from './nudelsalaterbsenmoehren/nudelsalaterbsenmoehren.component';
import { NudelsalatthunfischComponent } from './nudelsalatthunfisch/nudelsalatthunfisch.component';
import { ApfelcrumbelComponent } from './apfelcrumbel/apfelcrumbel.component';
import { MoehreningwersuppeComponent } from './moehreningwersuppe/moehreningwersuppe.component';
import { PrinzenkirschkuchenComponent } from './prinzenkirschkuchen/prinzenkirschkuchen.component';
import { BirneneierlikoertorteComponent } from './birneneierlikoertorte/birneneierlikoertorte.component';
import { HefezopfComponent } from './hefezopf/hefezopf.component';
import { ZuckersirupComponent } from './zuckersirup/zuckersirup.component';
import { MilchreisComponent } from './milchreis/milchreis.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'meinerezepte', component: MeinerezepteComponent },
  { path: 'apfelkuchenmitguss', component: ApfelkuchenmitgussComponent},
  { path: 'fruechtedoerren', component: FruechtedoerrenComponent},
  { path: 'mangodoerren', component: MangodoerrenComponent},
  { path: 'papayadoerren', component: PapayadoerrenComponent},
  { path: 'bananendoerren', component: BananendoerrenComponent},
  { path: 'weltmeisterbrot', component: WeltmeisterbrotComponent},
  { path: 'schokobananenbrot', component: SchokobananenbrotComponent},
  { path: 'kaiserschmarrn', component: KaiserschmarrnComponent},
  { path: 'moehreneintopf', component: MoehreneintopfComponent},
  { path: 'apfelmus', component: ApfelmusComponent},
  { path: 'impressum', component: ImpressumComponent},
  { path: 'ofen-makkaroni', component: OfenMakkaroniComponent},
  { path: 'reiswaffeltomatensnack', component: ReiswaffeltomatensnackComponent},
  { path: 'pinacolada', component: PinacoladaComponent},
  { path: 'mojito', component: MojitoComponent},
  { path: 'bananenpancakes', component: BananenpancakesComponent},
  { path: 'griessbrei', component: GriessbreiComponent},
  { path: 'basilikumpesto', component: BasilikumpestoComponent},
  { path: 'karottengruenpesto', component: KartottengruenpestoComponent},
  { path: 'couscoussalat', component: CouscoussalatComponent},
  { path: 'kartoffelsalat', component: KartoffelsalatComponent},
  { path: 'marmorkuchen', component: MarmorkuchenComponent},
  { path: 'rosinenkuchen', component: RosinenkuchenComponent},
  { path: 'eierlikoerkuchen', component: EierlikoerkuchenComponent},
  { path: 'schokoladenkuchen', component: SchokoladenkuchenComponent},
  { path: 'nudelsalaterbsenmoehren', component: NudelsalaterbsenmoehrenComponent},
  { path: 'nudelsalatthunfisch', component: NudelsalatthunfischComponent},
  { path: 'apfelcrumbel', component: ApfelcrumbelComponent},
  { path: 'prinzenkirschkuchen', component: PrinzenkirschkuchenComponent},
  { path: 'reisnudelsalattomatemozzarella', component: ReisnudelsalattomatemozzarellaComponent},
  { path: 'mangoramazottidrink', component: MangoramazottidrinkComponent},
  { path: 'birneneierlikoertorte', component: BirneneierlikoertorteComponent},
  { path: 'moehreningwersuppe', component: MoehreningwersuppeComponent},
  { path: 'hefezopf', component: HefezopfComponent},
  { path: 'zuckersirup', component: ZuckersirupComponent},
  { path: 'milchreis', component: MilchreisComponent},
  { path: 'apfelschmandtartelettesmiteierlikör', component: ApfelschmandtartelettesmiteierlikoerComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
