import { Box, Input } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  url: string;
}

export const Main: React.FC = () => {
  const [url, setUrl] = useState<string>();
  const { register, handleSubmit, setValue } = useForm();
  const [input, setInput] = useState<HTMLInputElement | undefined>();

  useEffect(() => {
    if (!input) return;
    input.focus();
  }, [input]);

  const onSubmit = async (formData: FormData) => {
    const url = formData.url;
    console.log(url);

    setUrl(url);
    setValue('url', '');
  };

  return (
    <Box m={1} flex={1} height={'100vh'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display={'flex'} mb={1}>
          <Input
            type={'text'}
            name={'url'}
            placeholder={'URLを入力'}
            inputRef={(input) => {
              if (!input) return;
              input.focus();
              setInput(input);
              register(input);
            }}
            onBlurCapture={(e) => {
              e.target.focus();
            }}
            fullWidth
            autoFocus
          />
        </Box>
      </form>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flex={1}
        height={1}
      >
        {url ? (
          <webview
            id="foo"
            src={url}
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <span>QRコードを読み込んでください</span>
        )}
      </Box>
    </Box>
  );
};
