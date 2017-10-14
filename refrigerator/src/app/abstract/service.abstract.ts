import { Subscription } from 'rxjs/Subscription';

export abstract class AService {
    subscriptions: Array<Subscription>;

    deleteSubscriptions() {
        this.subscriptions
            .map(s => {
                s.unsubscribe();
                this.subscriptions = this.subscriptions.slice(1, this.subscriptions.length);
            });
    }
}
