import init, * as oxigraph from "oxigraph/web";

class DBController {
    private store: oxigraph.Store;

    constructor() {
        (async () => {
            await init();
            this.store = new oxigraph.Store();
        })();
    }

    public clearStore(): void {
        this.store = new oxigraph.Store();
    }

    public query(query: string): oxigraph.Quad[] | undefined {
        let result: oxigraph.Quad[] | undefined;
        try {
            result = this.store.query(query) as oxigraph.Quad[];
        } catch (e) {}
        return result;
    }

    public printData(): void {
        console.log(this.store.size);
    }

    public addQuadsToStore(quads: oxigraph.Quad[]): void {
        for (let quad of quads) {
            this.store.add(quad);
        }
    }

    public saveStoreData(): void {
        let data = this.store.dump("text/turtle", undefined);
        this.printData();
        DBController.dumpData(data);
    }

    private static dumpData(triples: string, fileName: string = "mergedFiles.ttl"): void {
        const fileType = "text/turtle";
        const blob = new Blob([triples], { type: fileType });
        const a = document.createElement("a");
        a.download = fileName;
        a.href = URL.createObjectURL(blob);
        a.dataset.downloadurl = [fileType, a.download, a.href].join(":");
        a.style.display = "none";
        a.click();
    }
}

export { DBController };
