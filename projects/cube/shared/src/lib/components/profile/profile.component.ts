import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { AlertMessage,Language,Status } from '../../types/types';
import { UserService } from '../../services/user/user.service';
import { UserDTO } from '../../types/types';
import { IMAGES } from '../../constants/image-constants';

@Component({
    selector: 'cube-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    // Define an empty array of roles and a UserDTO variable
    userDto?: UserDTO;
    applications?: string[] = [];
    images = IMAGES;
    stati: Status[] = [
        {
            name: 'online',
            iconPath: this.images.ONLINE
        },
        {
            name: 'busy',
            iconPath: this.images.BUSY
        },
        {
            name: 'invisible',
            iconPath: this.images.INVISIBLE
        },
    ];

    // Define an array of Language objects
    languages: Language[] = [
        {
            name: 'English',
            langIdentifier: 'en-EN',
            flagPath: this.images.EN_EN,
        },
        {
            name: 'Italiano',
            langIdentifier: 'it-IT',
            flagPath: this.images.IT_IT,
        },
        {
            name: 'Français',
            langIdentifier: 'fr-FR',
            flagPath: this.images.FR_FR,
        },
    ];

    // Variabili per la gestione degli errori
    errorMsg?: AlertMessage | undefined;
    warningMsg?: AlertMessage | undefined;
    successMsg?: AlertMessage | undefined;

    constructor(
        private auth: AuthService,
        private userService: UserService,
        private translateService: TranslateService
    ) {
        // Subscribe to the userDTOBehaviorSubject from the AuthService
        auth.userDTOBehaviorSubject?.subscribe({
            next: (userDto) => (this.userDto = userDto),
        });
    }

    ngOnInit(): void { }

    // Define a function for uploading an image
    uploadImage(input: any) {
        const file: File = input.target.files[0];

        if (file.size > 16494) {
            this.errorMsg = { message: "message.error.imageSize" };
            return;
        }

        const reader: FileReader = new FileReader();

        reader.onloadend = () => {
            const result: string | ArrayBuffer | null = reader.result;

            if (result) {
                this.userService.updateProfilePic(result.toString()).subscribe({
                    next: () => {
                        if (this.userDto?.propertiesDTO) {
                            this.userDto.propertiesDTO.profilePicture = result.toString();
                            this.successMsg = { message: "message.success.image" };
                            this.auth.userDTOBehaviorSubject.next(this.userDto);
                        }
                    },
                    error: (error) => {
                        this.errorMsg = { message: error.error.message,params: JSON.stringify(Object.assign({},error.error.parameter)) };
                    }
                });
            }
        };

        reader.readAsDataURL(file);
    }

    updateItemPerPage(itemPerPage: string) {
        if (itemPerPage != '') {
            this.userService.updateItemPerPage(itemPerPage).subscribe({
                next: (response) => {
                    if (response && this.userDto?.propertiesDTO) {
                        this.userDto.propertiesDTO.itemPage = itemPerPage;
                        this.successMsg = { message: "message.success.item" };
                        this.auth.userDTOBehaviorSubject.next(this.userDto);
                    }
                },
                error: (error) => {
                    this.errorMsg = { message: error.error.message,params: JSON.stringify(Object.assign({},error.error.parameter)) };
                }
            });
        }
    }

    updateLanguage(lang: string) {
        this.translateService.use(lang);
        this.userService.updateLanguage(lang).subscribe({
            next: () => {
                if (this.userDto?.propertiesDTO) {
                    this.successMsg = { message: "message.success.language" };
                    this.userDto.propertiesDTO.defaultLanguage = lang;
                }
            },
            error: (error) => {
                this.errorMsg = { message: error.error.message,params: JSON.stringify(Object.assign({},error.error.parameter)) };
            }
        });
    }

    updateStatus(status: string) {
        this.userService.updateStatus(status).subscribe({
            next: (response) => {
                if (response && this.userDto?.propertiesDTO) {
                    this.userDto.propertiesDTO.status = status;
                    this.successMsg = { message: "message.success.status" };
                    this.auth.userDTOBehaviorSubject.next(this.userDto);
                }
            },
            error: (error) => {
                this.errorMsg = { message: error.error.message,params: JSON.stringify(Object.assign({},error.error.parameter)) };
            }
        });
    }
}