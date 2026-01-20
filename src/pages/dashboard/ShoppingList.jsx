import { useState } from 'react';
import { Plus, Trash2, CheckCircle, Circle, ArrowLeft, MoreVertical, FileText, Calendar } from 'lucide-react';
import TiltCard from '../../components/TiltCard';
import MagneticButton from '../../components/MagneticButton';

const ShoppingList = () => {
    // Mock Data: Multiple Lists
    const [lists, setLists] = useState([
        {
            id: 1,
            title: "Grocery Run",
            date: "Oct 24",
            color: "bg-blue-500",
            items: [
                { id: 1, text: "Milk", completed: false },
                { id: 2, text: "Bread", completed: true },
                { id: 3, text: "Eggs", completed: false }
            ]
        },
        {
            id: 2,
            title: "Tech Wishlist",
            date: "Nov 01",
            color: "bg-purple-500",
            items: [
                { id: 1, text: "RTX 5090", completed: false },
                { id: 2, text: "Mechanical Keycaps", completed: false }
            ]
        },
        {
            id: 3,
            title: "Home Decor",
            date: "Dec 15",
            color: "bg-pink-500",
            items: []
        }
    ]);

    const [activeListId, setActiveListId] = useState(null);
    const [newListTitle, setNewListTitle] = useState("");
    const [newItemText, setNewItemText] = useState("");
    const [isCreating, setIsCreating] = useState(false);

    // Derived State
    const activeList = lists.find(l => l.id === activeListId);

    // -- Actions --

    const createList = (e) => {
        e.preventDefault();
        if (!newListTitle.trim()) return;
        const newList = {
            id: Date.now(),
            title: newListTitle,
            date: "Just Now",
            color: "bg-accent", // Default color
            items: []
        };
        setLists([newList, ...lists]);
        setNewListTitle("");
        setIsCreating(false);
    };

    const deleteList = (id, e) => {
        e.stopPropagation();
        setLists(lists.filter(l => l.id !== id));
        if (activeListId === id) setActiveListId(null);
    };

    const addItem = (e) => {
        e.preventDefault();
        if (!newItemText.trim()) return;

        setLists(lists.map(list => {
            if (list.id === activeListId) {
                return {
                    ...list,
                    items: [...list.items, { id: Date.now(), text: newItemText, completed: false }]
                };
            }
            return list;
        }));
        setNewItemText("");
    };

    const toggleItem = (itemId) => {
        setLists(lists.map(list => {
            if (list.id === activeListId) {
                return {
                    ...list,
                    items: list.items.map(item =>
                        item.id === itemId ? { ...item, completed: !item.completed } : item
                    )
                };
            }
            return list;
        }));
    };

    const deleteItem = (itemId) => {
        setLists(lists.map(list => {
            if (list.id === activeListId) {
                return {
                    ...list,
                    items: list.items.filter(item => item.id !== itemId)
                };
            }
            return list;
        }));
    };

    // -- Render --

    // View: Single List Details
    if (activeList) {
        return (
            <div className="max-w-3xl mx-auto h-[calc(100vh-140px)] flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                    <button onClick={() => setActiveListId(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="text-3xl font-bold flex-1">{activeList.title}</h1>
                    <span className="text-sm text-gray-400">{activeList.items.length} items</span>
                </div>

                {/* Add Item Input */}
                <div className="card-glass p-0 mb-6 overflow-hidden">
                    <form onSubmit={addItem} className="flex">
                        <input
                            type="text"
                            value={newItemText}
                            onChange={(e) => setNewItemText(e.target.value)}
                            placeholder="Add a new item..."
                            className="flex-1 bg-transparent p-5 focus:outline-none text-lg"
                            autoFocus
                        />
                        <button type="submit" className="px-6 bg-white/5 hover:bg-white/10 transition-colors text-accent font-bold">
                            <Plus className="w-6 h-6" />
                        </button>
                    </form>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-2">
                    {activeList.items.length === 0 && (
                        <div className="text-center text-gray-500 py-20 italic">
                            No items yet. Start adding some!
                        </div>
                    )}
                    {activeList.items.map(item => (
                        <div key={item.id} className="card-glass p-4 flex items-center justify-between group hover:border-accent/30 transition-colors animate-fade-in">
                            <div className="flex items-center gap-4 cursor-pointer flex-1" onClick={() => toggleItem(item.id)}>
                                {item.completed ?
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" /> :
                                    <Circle className="w-6 h-6 text-gray-500 flex-shrink-0" />
                                }
                                <span className={`text-lg ${item.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                                    {item.text}
                                </span>
                            </div>
                            <button onClick={() => deleteItem(item.id)} className="text-gray-500 hover:text-red-400 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // View: All Lists (Grid)
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">My Lists</h1>
                <MagneticButton strength={30}>
                    <button onClick={() => setIsCreating(true)} className="btn-primary px-4 py-2 rounded-xl flex items-center gap-2">
                        <Plus className="w-5 h-5" /> New List
                    </button>
                </MagneticButton>
            </div>

            {isCreating && (
                <div className="mb-8 animate-fade-in-down">
                    <div className="card-glass p-2 pl-4 flex items-center gap-2 border-accent/50">
                        <FileText className="w-5 h-5 text-accent" />
                        <form onSubmit={createList} className="flex-1 flex">
                            <input
                                type="text"
                                value={newListTitle}
                                onChange={(e) => setNewListTitle(e.target.value)}
                                placeholder="List Name (e.g. Camping Trip)..."
                                className="flex-1 bg-transparent py-3 focus:outline-none"
                                autoFocus
                            />
                            <div className="flex gap-2">
                                <button type="button" onClick={() => setIsCreating(false)} className="px-4 text-gray-400 hover:text-white">Cancel</button>
                                <button type="submit" className="bg-accent px-6 rounded-lg font-bold">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lists.map(list => (
                    <TiltCard
                        key={list.id}
                        onClick={() => setActiveListId(list.id)}
                        className="card-glass p-1 group cursor-pointer h-full"
                    >
                        <div className="p-5 relative">
                            <div className={`absolute top-0 left-0 w-2 h-full ${list.color}`}></div>

                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-white/5 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <button onClick={(e) => deleteList(list.id, e)} className="p-2 text-gray-500 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors">
                                    <Trash2 className="w-4 h-4 visible" />
                                </button>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{list.title}</h3>

                            <div className="flex items-center justify-between text-sm text-gray-400">
                                <p>{list.items.length} items</p>
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" /> {list.date}
                                </div>
                            </div>
                        </div>
                    </TiltCard>
                ))}
            </div>
        </div>
    );
};

export default ShoppingList;
