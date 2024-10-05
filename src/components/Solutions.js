import React from 'react';
import './Solutions.css'; // Make sure this is imported

const Solutions = () => {
    const features = [
        {
            title: "Machine Learning",
            description: "Our AI system has enriched data to improve performance over time. This is achieved through machine learning.",
            image: "https://cdn-icons-png.flaticon.com/512/1040/1040239.png"
        },
        {
            title: "Autonomous Agents",
            description: "TechAI system is situated within an environment that senses and acts on it.",
            image: "https://cdn-icons-png.flaticon.com/512/2534/2534927.png"
        },
        {
            title: "Robotics",
            description: "Our intelligent technologies assist humans in different ways to power up your business.",
            image: "https://cdn-icons-png.flaticon.com/512/1040/1040226.png"
        },
        {
            title: "Neural Networks",
            description: "Our AI system improves over time, leveraging neural network architectures.",
            image: "https://cdn-icons-png.flaticon.com/512/606/606812.png"
        },
        {
            title: "Computer Vision",
            description: "TechAI system senses and interprets its environment through vision technologies.",
            image: "https://cdn-icons-png.flaticon.com/512/5613/5613084.png"
        },
        {
            title: "Expert Systems",
            description: "Our systems assist humans in decision-making processes to enhance business performance.",
            image: "https://cdn-icons-png.flaticon.com/512/5613/5613084.png"
        }
    ];

    return (
        <div className="solutions-page">
            <h2 className="solutions-heading">Features and Technologies</h2>
            <div className="solutions-grid">
                {features.map((feature, index) => (
                    <div key={index} className="solution-card">
                        <img src={feature.image} alt={feature.title} className="solution-image" />
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Solutions;
