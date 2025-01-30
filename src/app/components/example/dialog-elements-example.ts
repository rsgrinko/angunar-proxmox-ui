import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
    MAT_DIALOG_DATA,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
} from '@angular/material/dialog';


@Component({
    selector: 'dialog-elements-example-dialog',
    templateUrl: 'popup-dialog.html',
    imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupDialog {
    data = inject(MAT_DIALOG_DATA)
}


/**  Copyright 2025 Google LLC. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at https://angular.io/license */