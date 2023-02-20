export interface AddPostFormFields {
  title: string;
  body: string;
}

export interface AddPostFormProps {
  onSubmit: (data: AddPostFormFields) => void;
}
