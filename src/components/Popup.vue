<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="green"
        v-bind="attrs"
        v-on="on"
        class="text-uppercase white--text"
        >Add a New Project</v-btn
      >
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2">
        <h2>
          Add a New Project
        </h2>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="title"
            v-model="title"
            prepend-icon="folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Infomation"
            v-model="content"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-textarea>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="due"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="due"
                label="Due date"
                prepend-icon="event"
                readonly
                v-bind="attrs"
                v-on="on"
                :rules="inputRules"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(due)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="submit">
          Add proejct
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    title: "",
    content: "",
    dialog: false,
    menu: false,
    due: "",
    inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"]
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
          console.log(
            `title: ${this.title}, content: ${this.content}, due: ${this.due}`
          );
          this.dialog = !this.dialog;
      }
    }
  }
};
</script>

<style></style>
