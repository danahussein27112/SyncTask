import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { ProductActions } from '../actions';
import { ProductHttpService } from '../http-services/product.service';

@Injectable()
export class ProductEffects {
    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.LoadProducts),
            switchMap(() =>
                this.http.getProducts().pipe(
                    map((response) =>
                        ProductActions.LoadProductsSuccess({ Products: response })
                    ),
                    catchError((errorMessage: string) =>
                        of(ProductActions.LoadProductsFailure({ errorMessage }))
                    )
                )
            )
        )
    );

    loadProductById$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.LoadProductById),
            switchMap((action) =>
                this.http.getProductById(action.id).pipe(
                    map((response) => {
                        return ProductActions.LoadProductByIdSuccess({
                            Product: response,
                        });
                    }),
                    catchError((errorMessage: any) =>
                        of(ProductActions.LoadProductByIdFailure({ errorMessage }))
                    )
                )
            )
        )
    );
    addProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.CreateProduct),
            exhaustMap((action) =>
                this.http.createProduct(action.Product).pipe(
                    map((postResponse) =>
                        ProductActions.CreateProductSuccess({
                            Product: postResponse,
                        })
                    ),
                    catchError((errorMessage: string) =>
                        of(ProductActions.CreateProductFailure({ errorMessage }))
                    )
                )
            )
        )
    );

    //   addLedgerAccountCodeSuccess$ = createEffect(() =>
    //     this.actions$.pipe(
    //       ofType(ProductActions.CreateProductSuccess),
    //       mergeMap((action) => {
    //         const notification = {
    //           text: `Ledger Account added`,
    //           type: NotificationType.Information,
    //         } as NotificationModel;
    //         if (!action.keepFormOpen) {
    //           this.navigationService.navigateToLedgerAccountCodesList();
    //         } else {
    //           this.navigationService.navigateToLedgerAccountCodeForm();
    //         }
    //         return [new ShowNotificationAction(notification)];
    //       })
    //     )
    //   );

    //   addLedgerAccountCodeFailure$ = createEffect(() =>
    //     this.actions$.pipe(
    //       ofType(ProductActions.CreateLedgerAccountCodeFailure),
    //       map((action) => {
    //         return getNotification(action.errorMessage, 'Ledger Account could not be added.');
    //       })
    //     )
    //   );

    constructor(
        private readonly actions$: Actions,
        private readonly http: ProductHttpService,
    ) { }

}
