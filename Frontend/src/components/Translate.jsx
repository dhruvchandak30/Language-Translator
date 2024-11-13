import React, { useState } from 'react';
import { ArrowLeftRight, Clipboard } from 'lucide-react';

const Translate = () => {
    const [sourceLang, setSourceLang] = useState('auto');
    const [targetLang, setTargetLang] = useState('en');
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    // Swap source and target languages
    const handleSwapLanguages = () => {
        setSourceLang(targetLang);
        setTargetLang(sourceLang);
    };

    // Speech Recognition for Voice to Text
    const handleVoiceInput = () => {
        const recognition =
            new window.webkitSpeechRecognition() ||
            new window.SpeechRecognition();
        recognition.lang = sourceLang;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const speechText = event.results[0][0].transcript;
            setText(speechText);
        };

        recognition.onerror = (event) => {
            console.error('Error in speech recognition:', event.error);
        };

        recognition.start();
    };

    // Image to Text (OCR) - Placeholder for actual OCR logic
    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            // TODO: Implement OCR logic using Tesseract.js or a cloud OCR API like Google Vision
            console.log('Image uploaded:', file);
            setText("OCR result text goes here"); // Placeholder text
        }
    };

    // Text Translation (Placeholder for actual API call)
    const handleTranslate = async () => {
        setTranslatedText(`Translated text in ${targetLang}`);
    };

    // Text-to-Speech for translated text
    const handleTextToSpeech = () => {
        const utterance = new SpeechSynthesisUtterance(translatedText);
        utterance.lang = targetLang;
        speechSynthesis.speak(utterance);
    };

    // Copy translated text to clipboard
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(translatedText)
            .then(() => {
                alert('Text copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    };

    return (
        <div className="flex flex-col items-center p-6  h-screen  ">
            <div className="w-full  bg-gray-800 p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-white mb-6 text-center">
                    Language Translator
                </h1>

                {/* Language selection with swap button */}
                <div className="flex flex-row items-center align-middle justify-center my-8 space-x-4">
                    <div className="flex flex-col">
                        <select
                            value={sourceLang}
                            onChange={(e) => setSourceLang(e.target.value)}
                            className="p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="auto">Detect Language</option>
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="it">Italian</option>
                            <option value="pt">Portuguese</option>
                            <option value="zh">Chinese</option>
                            <option value="ja">Japanese</option>
                            <option value="ko">Korean</option>
                            <option value="ru">Russian</option>
                            <option value="ar">Arabic</option>
                            <option value="hi">Hindi</option>
                            <option value="bn">Bengali</option>
                            <option value="tr">Turkish</option>
                            <option value="vi">Vietnamese</option>
                            {/* Add more languages if needed */}
                        </select>
                    </div>

                    {/* Swap button */}
                    <button
                        onClick={handleSwapLanguages}
                        className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 flex my-auto align-middle"
                        aria-label="Swap Languages"
                    >
                        <ArrowLeftRight />
                    </button>

                    <div className="flex flex-col">
                        <select
                            value={targetLang}
                            onChange={(e) => setTargetLang(e.target.value)}
                            className="p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="it">Italian</option>
                            <option value="pt">Portuguese</option>
                            <option value="zh">Chinese</option>
                            <option value="ja">Japanese</option>
                            <option value="ko">Korean</option>
                            <option value="ru">Russian</option>
                            <option value="ar">Arabic</option>
                            <option value="hi">Hindi</option>
                            <option value="bn">Bengali</option>
                            <option value="tr">Turkish</option>
                            <option value="vi">Vietnamese</option>
                            {/* Add more languages if needed */}
                        </select>
                    </div>
                </div>

                {/* Text input area */}
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text or use voice input"
                    rows="4"
                    className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Voice input and image upload buttons */}
                <div className="flex space-x-4 mb-4">
                    <button
                        onClick={handleVoiceInput}
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
                    >
                        Use Microphone
                    </button>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                    />
                    <label
                        htmlFor="image-upload"
                        className="w-full bg-blue-600 text-white text-center font-semibold py-2 rounded hover:bg-blue-700 transition"
                    >
                        Upload Image
                    </label>
                </div>

                {/* Translation button */}
                <button
                    onClick={handleTranslate}
                    className="w-full bg-green-600 text-white font-semibold py-2 rounded mb-4 hover:bg-green-700 transition"
                >
                    Translate
                </button>

                {/* Translated text display with Copy to Clipboard button */}
                <div className="relative mb-4">
                    <textarea
                        value={translatedText}
                        readOnly
                        placeholder="Translation"
                        rows="4"
                        className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
                    />
                    <button
                        onClick={handleCopyToClipboard}
                        className="absolute right-2 top-2 p-2 bg-gray-600 text-white rounded-full hover:bg-gray-500"
                        aria-label="Copy to Clipboard"
                    >
                        <Clipboard />
                    </button>
                </div>

                {/* Text-to-Speech button */}
                <button
                    onClick={handleTextToSpeech}
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition text-center"
                >
                    Listen to Translation
                </button>
            </div>
        </div>
    );
};

export default Translate;
