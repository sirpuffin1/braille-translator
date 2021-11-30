import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import { Translation } from '../../../../../shared/models/translation.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loggedInUserSelector, translationsSelector } from 'src/app/store/selectors/user/user.selectors';
import { AppState } from 'src/app/store';
import { NbCardModule } from '@nebular/theme';
import { deleteTranslation } from 'src/app/store/actions/user/user.actions';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-translations-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './translations-list.component.html',
  styleUrls: ['./translations-list.component.scss']
})
export class TranslationsListComponent implements OnInit {

  translations$? : Observable<Translation[]>

  constructor(private store: Store<AppState>) {
    this.translations$ = this.store.select(translationsSelector)
  }
  deleteTranslation(id: string){
    this.store.dispatch(deleteTranslation({data: {_id: id}}))
    console.log(id)
  }

  ngOnInit(): void {
  }



}
