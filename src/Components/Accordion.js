import React, { useEffect, useState } from 'react';
import AccordionItem from "./AccordionItem";
import '../Components/Accordion.css';

const Accordion = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {

        setItems([

            {
                id: 1,
                title: 'What is a recipe sharing app?',
                content:
                    'A recipe sharing app is a mobile or web application that allows users to discover, share, and organize recipes. It provides a platform for culinary enthusiasts to upload their favorite recipes, explore recipes from others, and interact with a community of fellow food lovers.',
            },
            {
                id: 2,
                title: 'How can I get started with the recipe sharing app?',
                content:
                    'To get started, download the app from your device app store or visit the website.Sign up for an account, which is often free,and you will gain access to a wide range of recipes and features. You can start exploring recipes, saving your favorites, and even sharing your own creations.',
            },
            {
                id: 3,
                title: 'Can I search for recipes ?',
                content:
                    'Yes, most recipe sharing apps offer a search feature that allows you to find recipes .Simply enter the recipe name you want to cook, and the app will suggest recipes that match your criteria..',
            },

            {
                id: 4,
                title: ' Can I save recipes I like for later reference?',
                content: 'Absolutely! Most recipe sharing apps allow you to save recipes. This way, you can easily access your favorite recipes whenever you want to prepare them.',
            },
            {
                id: 5,
                title: ' Is the app available on multiple platforms (iOS, Android, web)?',
                content: 'Most recipe sharing apps are available on multiple platforms, including iOS, Android, and web browsers. This ensures that users can access the app from their preferred devices.',
            },
            {
                id: 6,
                title: ' How do I upload my own recipes to the app?',
                content: 'To share your recipes with the community, log in to your account and look for an option to "Add a Recipe" or a similar feature. You will typically provide details like the recipe name, ingredients,step-by-step instructions, and a photo. Once submitted, your recipe will be visible to other users.',
            },
            {
                id: 7,
                title: 'Can I follow CookMate on multiple social media platforms?',
                content: 'Yes, CookMate allow users to follow its updates on all social media platforms including Instagram, Twitter, Facebook and YouTube.',
            },
            {
                id: 8,
                title: 'How can I find recipes from a specific cuisine?',
                content: 'In our app, you can easily find recipes from a specific cuisine just by clicking onto the specific cuisine card.',
            },
            {
                id: 9,
                title: 'Can I save my favorite recipes from different cuisines?',
                content: 'Yes, you can create a personal recipe collection by saving your favorite recipes. This feature allows you to organize and easily access recipes from different cuisines.',
            },
            {
                id: 10,
                title: 'Are there recipe tutorials for preparing dishes from different cuisines?',
                content: 'Yes, we offer recipe links for each of the recipes, making it easier for you to follow along and prepare dishes from various cuisines with confidence.',
            },
            {
                id: 11,
                title: 'What cuisines are covered in this recipe sharing app?',
                content: 'Our recipe sharing app covers a wide range of cuisines from around the world. You`ll find recipes for Italian, Chinese, Korean, Indian, French, American, and many more!',
            },
        ]);
    }, []);

    return (
        <div className='faq-container'>
            <div className="container-acc">
                <h2 className='faq-header'>Frequently Asked Questions</h2>
                <AccordionItem items={items} />
            </div>
        </div>
    );

};

export default Accordion;