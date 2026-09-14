# Recovery archives

Upload the exact recovery archive here using this filename:

`Mosslight_V3R1_Reconstructed_Source.zip`

The repository workflow `.github/workflows/import-recovery.yml` watches for that file. When it is uploaded, GitHub Actions will automatically unpack the archive, verify the critical recovered Mosslight files, and commit the reconstructed source tree to `main`.

Do not rename or modify the archive before upload.
