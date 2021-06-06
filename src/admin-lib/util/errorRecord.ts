export class ErrorRecord {
    messages: Record<string, string[]> = {};

    addMessage = (key: string, message: string) => {
        if (!this.messages[key]) {
            this.messages[key] = [];
        }

        this.messages[key].push(message);
    }
}
