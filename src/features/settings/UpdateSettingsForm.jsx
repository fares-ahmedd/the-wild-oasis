import styled from "styled-components";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";
const H1 = styled.h1`
  text-align: center;
  color: white;
  background-color: red;
  padding: 15px;
  margin-top: 30px;
  border-radius: 20px;
`;
function UpdateSettingsForm() {
  const { isLoading, settings, error } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSetting();
  function handleUpdate(e, field) {
    const value = e.target.value;
    if (!value) return;
    updateSetting({ [field]: value });
  }
  if (isLoading) return <Spinner />;
  if (error) return <H1>{error.message}</H1>;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          defaultValue={settings.minBookingLength}
          type="number"
          id="min-nights"
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          defaultValue={settings.maxBookingLength}
          type="number"
          id="max-nights"
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          defaultValue={settings.maxGuestsPerBooking}
          type="number"
          id="max-guests"
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          defaultValue={settings.breakfastPrice}
          type="number"
          id="breakfast-price"
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
