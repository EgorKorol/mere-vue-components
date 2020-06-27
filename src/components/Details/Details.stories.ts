import MereDetails from "@/components/Details/Details.vue";

export default {
  title: "Public/Details",
};

export const variants = () => ({
  components: { MereDetails },
  template: `
    <div>
			<MereDetails>
        <template v-slot:summary>
          Default
        </template>
        <template v-slot:details>
          Details textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails text
        </template>
      </MereDetails>
      <MereDetails variant="secondary">
        <template v-slot:summary>
          Secondary
        </template>
        <template v-slot:details>
          Details textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails text
        </template>
      </MereDetails>
      <MereDetails variant="success">
        <template v-slot:summary>
          Success
        </template>
        <template v-slot:details>
          Details textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails text
        </template>
      </MereDetails>
      <MereDetails variant="error">
        <template v-slot:summary>
          Error
        </template>
        <template v-slot:details>
          Details textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails text
        </template>
      </MereDetails>
    </div>
  `,
});

export const sizes = () => ({
  components: { MereDetails },
  template: `
    <div>
			<MereDetails size="small">
        <template v-slot:summary>
          Small
        </template>
        <template v-slot:details>
          Details textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails text
        </template>
      </MereDetails>
      <MereDetails>
        <template v-slot:summary>
          Default
        </template>
        <template v-slot:details>
          Details textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails text
        </template>
      </MereDetails>
      <MereDetails size="large">
        <template v-slot:summary>
          Large
        </template>
        <template v-slot:details>
          Details textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails textDetails text
        </template>
      </MereDetails>
    </div>
  `,
});
