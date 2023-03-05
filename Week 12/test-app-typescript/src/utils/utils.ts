export function runCallback(aNumber:number, callback:React.FC
    ) {

    const xNumber = aNumber * 5;

    if (xNumber < 100) {
        callback(xNumber);
    }

}


afterEach(() => {
        jest.clearAllMocks();
    });
