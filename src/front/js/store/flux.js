const getState = ({ getStore, getActions, setStore }) => {
	return {
    store: {
      horas: ["1", "2", "3", "4", "5", "6", "7", "8"],
      hora: "",
      message: null,
      role: "",
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      selectionRoles: (role) => {
        // const store = getStore()
        setStore({ role: role });
        console.log("Se ha seleccionado el:" + role);
      },

      selectionHora: (hora) => {
        // const store = getStore()
        setStore({ hora: hora });
        console.log("Se ha seleccionado la hora:" + hora);
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
