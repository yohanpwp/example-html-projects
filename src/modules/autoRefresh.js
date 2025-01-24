const autoRefresh = (dataFunction, onComplete, interval = 3000) => {
    const execute = () => {
        dataFunction().then(data => {
            onComplete(data);
            setTimeout(execute, interval);
        });
    };
};