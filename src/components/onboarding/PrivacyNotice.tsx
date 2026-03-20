export default function PrivacyNotice() {
    return (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
            <p className="mb-2">
                Health Assistant -- проект с открытым исходным кодом. Создано командой Tehniki.
                Если вы предпочитаете не делиться данными, вы можете запустить его локально.
            </p>
            <p className="mb-2">
                <a
                    href="https://github.com/OpenHealthForAll/open-health"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                >
                    GitHub Repository
                </a>
            </p>
            <p>
                Ваши данные не будут переданы третьим лицам и будут использоваться только для анализа ваших проблем со здоровьем.
            </p>
        </div>
    );
} 