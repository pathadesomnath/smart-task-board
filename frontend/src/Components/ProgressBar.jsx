function ProgressBar({ tasks }) {
    const completed = tasks.filter((t) => t.completed).length;

    const percent =
        tasks.length === 0
            ? 0
            : Math.round((completed / tasks.length) * 100);

    return (
        <div className="mb-6">
            <div className="flex justify-between mb-1">
                <span>Progress</span>
                <span>{percent}%</span>
            </div>

            <div className="bg-gray-300 rounded-full h-3">
                <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
        </div>
    );
}

export default ProgressBar;