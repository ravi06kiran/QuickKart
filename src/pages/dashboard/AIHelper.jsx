import { Bot, Send } from 'lucide-react';
import { useState } from 'react';
import MagneticButton from '../../components/MagneticButton';

const AIHelper = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your QuickKart AI Assistant. How can I help you shop today?", isBot: true }
    ]);
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages([...messages, { id: Date.now(), text: input, isBot: false }]);
        setInput("");

        // Mock response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now(),
                text: "I noticed you're interested in electronics. Check out our new gadgets section!",
                isBot: true
            }]);
        }, 1000);
    };

    return (
        <div className="h-[calc(100vh-140px)] flex flex-col">
            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Bot className="w-8 h-8 text-accent" /> AI Shopping Assistant
            </h1>

            <div className="flex-1 card-glass p-0 overflow-hidden flex flex-col">
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {messages.map(msg => (
                        <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                            <div className={`max-w-[70%] p-4 rounded-2xl ${msg.isBot ? 'bg-white/10 text-gray-200' : 'bg-accent text-white'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-4 border-t border-white/10 bg-secondary/50">
                    <form onSubmit={sendMessage} className="flex gap-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask for recommendations..."
                            className="flex-1 bg-primary border border-white/10 rounded-xl px-4 py-3 focus:border-accent focus:outline-none"
                        />
                        <MagneticButton strength={30}>
                            <button type="submit" className="btn-primary rounded-xl px-6 flex items-center justify-center h-full">
                                <Send className="w-5 h-5" />
                            </button>
                        </MagneticButton>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default AIHelper;
