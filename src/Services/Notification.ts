import {Notyf} from 'notyf'


class Notify{

    private notification = new Notyf({duration:8000, position:{x:"right",y:"bottom"}});
    
		public success(message: string){
        this.notification.success(message);
    }

    public error(message: string){
        this.notification.error(message);
    }
}
const notify = new Notify();
export default notify;