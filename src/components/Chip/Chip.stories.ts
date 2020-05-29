import { action } from "@storybook/addon-actions";
import MereChip from "@/components/Chip/Chip.vue";

export default {
  title: "Public/Chip",
};

const actions = {
  onClick: action("click"),
  onRemove: action("remove"),
};

export const variants = () => ({
  components: { MereChip },
  template: `
    <div class="ta-center">
			<div class="mb-4">
				<MereChip class="mr-2">
					Default filled
				</MereChip>
				<MereChip
					class="mr-2"
					variant="secondary"
				>
					Secondary filled
				</MereChip>
				<MereChip
					class="mr-2"
					variant="error"
				>
					Error filled
				</MereChip>
				<MereChip variant="success">
					Success filled
				</MereChip>
			</div>
			<div class="mb-4">
				<MereChip
					class="mr-2"
					:outlined="true"
				>
					Default outlined
				</MereChip>
				<MereChip
					class="mr-2"
					variant="secondary"
					:outlined="true"
				>
					Secondary outlined
				</MereChip>
				<MereChip
					class="mr-2"
					variant="error"
					:outlined="true"
				>
					Error outlined
				</MereChip>
				<MereChip
					variant="success"
					:outlined="true"
				>
					Success outlined
				</MereChip>
			</div>
			<div class="mb-4">
				<MereChip
					class="mr-2"
					:clickable="true"
					@click="onClick"
				>
					Default clickable
				</MereChip>
				<MereChip
					class="mr-2"
					variant="secondary"
					:clickable="true"
					@click="onClick"
				>
					Secondary clickable
				</MereChip>
				<MereChip
					class="mr-2"
					variant="error"
					:clickable="true"
					@click="onClick"
				>
					Error clickable
				</MereChip>
				<MereChip
					variant="success"
					:clickable="true"
					@click="onClick"
				>
					Success clickable
				</MereChip>
			</div>
			<div class="mb-4">
				<MereChip
					class="mr-2"
					:clickable="true"
					:outlined="true"
					@click="onClick"
				>
					Default clickable
				</MereChip>
				<MereChip
					class="mr-2"
					variant="secondary"
					:clickable="true"
					:outlined="true"
					@click="onClick"
				>
					Secondary clickable
				</MereChip>
				<MereChip
					class="mr-2"
					variant="error"
					:clickable="true"
					:outlined="true"
					@click="onClick"
				>
					Error clickable
				</MereChip>
				<MereChip
					variant="success"
					:clickable="true"
					:outlined="true"
					@click="onClick"
				>
					Success clickable
				</MereChip>
			</div>
			<div class="mb-4">
				<MereChip
					class="mr-2"
					:removable="true"
					@remove="onRemove"
				>
					Default removable
				</MereChip>
				<MereChip
					class="mr-2"
					variant="secondary"
					:removable="true"
					@remove="onRemove"
				>
					Secondary removable
				</MereChip>
				<MereChip
					class="mr-2"
					variant="error"
					:removable="true"
					@remove="onRemove"
				>
					Error removable
				</MereChip>
				<MereChip
					variant="success"
					:removable="true"
					@remove="onRemove"
				>
					Success removable
				</MereChip>
			</div>
			<div class="mb-4">
				<MereChip
					class="mr-2"
					:removable="true"
					:outlined="true"
					@remove="onRemove"
				>
					Default removable
				</MereChip>
				<MereChip
					class="mr-2"
					variant="secondary"
					:removable="true"
					:outlined="true"
					@remove="onRemove"
				>
					Secondary removable
				</MereChip>
				<MereChip
					class="mr-2"
					variant="error"
					:removable="true"
					:outlined="true"
					@remove="onRemove"
				>
					Error removable
				</MereChip>
				<MereChip
					variant="success"
					:removable="true"
					:outlined="true"
					@remove="onRemove"
				>
					Success removable
				</MereChip>
			</div>
			<div class="mb-4">
				<MereChip
					class="mr-2"
					:removable="true"
					:clickable="true"
					@remove="onRemove"
					@click="onClick"
				>
					Default clickable removable
				</MereChip>
				<MereChip
					class="mr-2"
					variant="secondary"
					:removable="true"
					:clickable="true"
					@remove="onRemove"
					@click="onClick"
				>
					Secondary clickable removable
				</MereChip>
				<MereChip
					class="mr-2"
					variant="error"
					:removable="true"
					:clickable="true"
					@remove="onRemove"
					@click="onClick"
				>
					Error clickable removable
				</MereChip>
				<MereChip
					variant="success"
					:removable="true"
					:clickable="true"
					@remove="onRemove"
					@click="onClick"
				>
					Success clickable removable
				</MereChip>
			</div>
			<div>
				<MereChip
					class="mr-2"
					:removable="true"
					:clickable="true"
					:outlined="true"
					@remove="onRemove"
					@click="onClick"
				>
					Default clickable removable
				</MereChip>
				<MereChip
					class="mr-2"
					variant="secondary"
					:removable="true"
					:clickable="true"
					:outlined="true"
					@remove="onRemove"
					@click="onClick"
				>
					Secondary clickable removable
				</MereChip>
				<MereChip
					class="mr-2"
					variant="error"
					:removable="true"
					:clickable="true"
					:outlined="true"
					@remove="onRemove"
					@click="onClick"
				>
					Error clickable removable
				</MereChip>
				<MereChip
					variant="success"
					:removable="true"
					:clickable="true"
					:outlined="true"
					@remove="onRemove"
					@click="onClick"
				>
					Success clickable removable
				</MereChip>
			</div>
    </div>
  `,
  methods: actions,
});

export const sizes = () => ({
  components: { MereChip },
  template: `
		<div>
			<div>
				<MereChip size="small">
					Small
				</MereChip>
				<MereChip>
					Default
				</MereChip>
				<MereChip size="large">
					Large
				</MereChip>
			</div>
			<div>
				<MereChip
					size="small"
					:removable="true"
					:clickable="true"
					@click="onClick"
					@remove="onRemove"
				>
					Small
				</MereChip>
				<MereChip
					:removable="true"
					:clickable="true"
					@click="onClick"
					@remove="onRemove"
				>
					Default
				</MereChip>
				<MereChip
					size="large"
					:removable="true"
					:clickable="true"
					@click="onClick"
					@remove="onRemove"
				>
					Large
				</MereChip>
			</div>
		</div>
  `,
  methods: actions,
});
