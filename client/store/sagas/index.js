import { all, take } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';

import { userSaga } from './user.saga';
import { productSaga } from './product.saga';

export default function* () {
  yield take(REHYDRATE);
  yield all([userSaga(), productSaga()]);
}

// 1. no
// 2. no
// 3. no
// 4. yes? j Tammie Ema
// 5. no
// 6. yes? jAna Florence
// 7. yes? "Annmarie Nele",
// 8. no
// 9. no
// 10. no
// 11. no
// 12. no
// Vjollca Johnnie

// Abrahan Mack
// Adde Michal
// Ilkin Urbano