export class UserAccount {
    constructor(opts) {
        this.id = '';
        this.name = '';
        this.document = '';
        this.username = '';

        Object.assign(this, opts);
    }
}