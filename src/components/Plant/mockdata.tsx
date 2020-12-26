const useForm = () => {

    const temp = [
        {
            "name": "12:00",
            "value": 16.5,
        },

        {
            "name": "12:01",
            "value": 18,
        },
        {
            "name": "12:02",
            "value": 16.5,
        },

        {
            "name": "12:03",
            "value": 17,
        },
    ];
    const moist = [
        {
            "name": "12:00",
            "value": 20,
        },

        {
            "name": "12:01",
            "value": 19,
        },
        {
            "name": "12:02",
            "value": 19,
        },

        {
            "name": "12:03",
            "value": 18,
        },
    ];


    return {
        temp,
        moist,
    }
};

export default useForm;
