// import React, { useState } from "react";
// import { Lesson } from "./types";
// import Modal from "./AdminPanel/Modal";
// import LessonEditor from "./LessonEditor";

// interface CMSFormProps {
//     levels: string[];
//     imageList: string[];
//     onAddLesson: (lesson: Lesson) => void;
// }

// const CMSForm: React.FC<CMSFormProps> = ({
//     levels,
//     imageList,
//     onAddLesson,
// }) => {
//     const [level, setLevel] = useState<string>("");
//     const [lessonTitle, setLessonTitle] = useState<string>("");
//     const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//     const [selectedImage, setSelectedImage] = useState<string>("");
//     const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

//     const handleAddLesson = () => {
//         if (!level || !lessonTitle || !selectedImage) {
//             alert("Please fill all fields");
//             return;
//         }

//         const newLesson: Lesson = {
//             level: level,
//             title: lessonTitle,
//             image: selectedImage,
//             id: "", 
//             description: ""
//         };

//         onAddLesson(newLesson);

//         setLevel("");
//         setLessonTitle("");
//         setSelectedImage("");
//         setShowSuccessMessage(true);
//     };

//     const handleImageSelect = (imageUrl: string) => {
//         setSelectedImage(imageUrl);
//         setIsModalOpen(false);
//     };

//     return (
//         <div className="cms-form">
//             <h3>1. Add New Lesson/list</h3>
//             <label htmlFor="level">Select Level:</label>
//             <select
//                 id="level"
//                 value={level}
//                 onChange={(e) => setLevel(e.target.value)}
//             >
//                 <option value="">Select</option>
//                 {levels.map((level, index) => (
//                     <option key={index} value={level}>
//                         {level}
//                     </option>
//                 ))}
//             </select>
//             <br />
//             <label htmlFor="title">Lesson Title:</label>
//             <input
//                 type="text"
//                 id="title"
//                 value={lessonTitle}
//                 onChange={(e) => setLessonTitle(e.target.value)}
//             />
//             <br />
//             <label htmlFor="image">Select Image:</label>
//             <select
//                 id="image"
//                 value={selectedImage}
//                 onChange={(e) => setSelectedImage(e.target.value)}
//             >
//                 <option value="">Select</option>
//                 {imageList.map((image, index) => (
//                     <option key={index} value={image}>
//                         {image}
//                     </option>
//                 ))}
//             </select>
//             <br />
//             <div className="cms-buttons">
//             <button onClick={() => setIsModalOpen(true)}>Select Image</button>
//             <button onClick={handleAddLesson}>Add Lesson</button>
//             </div>
//             {showSuccessMessage && <p>Lesson successfully added!</p>}
//             <Modal 
//                 imageList={imageList}
//                 onSelectImage={handleImageSelect}
//                 closeModal={() => setIsModalOpen(false)}
//                 isOpen={isModalOpen}
//             />
//             <LessonEditor onSaveLesson={onAddLesson} />
//         </div>
//     );
// };

// export default CMSForm;



// CMSForm.tsx
import React, { useState } from "react";
import { Lesson } from "./types";
import Modal from "./AdminPanel/Modal";
import LessonEditor from "./LessonEditor";

interface CMSFormProps {
    levels: string[]; // Добавляем список уровней в пропсы
    imageList: string[];
    onAddLesson: (lesson: Lesson, level: string) => void;
}

const CMSForm: React.FC<CMSFormProps> = ({
    levels,
    imageList,
    onAddLesson,
}) => {
    const [level, setLevel] = useState<string>("");
    const [lessonTitle, setLessonTitle] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

    const handleAddLesson = () => {
        if (!level || !lessonTitle || !selectedImage) {
            alert("Please fill all fields");
            return;
        }

        const newLesson: Lesson = {
            level: level,
            title: lessonTitle,
            image: selectedImage,
            id: "",
            description: "",
            _id: undefined
        };

        onAddLesson(newLesson, level);

        setLevel("");
        setLessonTitle("");
        setSelectedImage("");
        setShowSuccessMessage(true);
    };

    const handleImageSelect = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(false);
    };

    return (
        <div className="cms-form">
            <h3>1. Add New Lesson/list</h3>
            <label htmlFor="level">Select Level:</label>
            <select
                id="level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
            >
                <option value="">Select</option>
                {levels.map((level, index) => (
                    <option key={index} value={level}>
                        {level}
                    </option>
                ))}
            </select>
            <br />
            <label htmlFor="title">Lesson Title:</label>
            <input
                type="text"
                id="title"
                value={lessonTitle}
                onChange={(e) => setLessonTitle(e.target.value)}
            />
            <br />
            <label htmlFor="image">Select Image:</label>
            <select
                id="image"
                value={selectedImage}
                onChange={(e) => setSelectedImage(e.target.value)}
            >
                <option value="">Select</option>
                {imageList.map((image, index) => (
                    <option key={index} value={image}>
                        {image}
                    </option>
                ))}
            </select>
            <br />
            <div className="cms-buttons">
                <button onClick={() => setIsModalOpen(true)}>Select Image</button>
                <button onClick={handleAddLesson}>Add Lesson</button>
            </div>
            {showSuccessMessage && <p>Lesson successfully added!</p>}
            <Modal 
                imageList={imageList}
                onSelectImage={handleImageSelect}
                closeModal={() => setIsModalOpen(false)}
                isOpen={isModalOpen}
            />
            <LessonEditor onSaveLesson={(lesson) => onAddLesson(lesson, level)} />
        </div>
    );
};

export default CMSForm;

