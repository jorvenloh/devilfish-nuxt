<template>
    <div>
        <div class="mb-7">
            <EmailVerificationAlert
                :email="registered_email"
                :show-alert="show_email_verification_alert"
            ></EmailVerificationAlert>
        </div>
        <v-form ref="form" class="secondary--text" lazy-validation>
            <v-text-field
                v-model="form.email"
                prepend-inner-icon="email"
                outlined
                label="Email"
                :rules="[required, email]"
                :error-messages="errors['email']"
                :disabled="loading"
            ></v-text-field>
            <v-text-field
                v-model="form.password"
                prepend-inner-icon="verified_user"
                label="Password"
                outlined
                :type="show_password ? 'text' : 'password'"
                :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[required, min(8)]"
                :error-messages="errors['password']"
                :disabled="loading"
                @click:append="show_password = !show_password"
            ></v-text-field>
            <v-text-field
                v-model="form.password_confirmation"
                prepend-inner-icon="verified_user"
                label="Confirm Password"
                outlined
                :type="show_password ? 'text' : 'password'"
                :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[required, min(8), passwordConfirmationRule]"
                :error-messages="errors['password_confirmation']"
                :disabled="loading"
                @click:append="show_password = !show_password"
            ></v-text-field>

            <v-checkbox
                v-model="form.tnc_check"
                :rules="[checked]"
                :error-messages="errors['tnc_check']"
                :disabled="loading"
            >
                <template v-slot:label>
                    <div>
                        I had read and agree to the
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <a
                                    target="_blank"
                                    href="/terms-of-use"
                                    @click.stop
                                    v-on="on"
                                >Terms of use</a>
                            </template>
                            Opens in new window
                        </v-tooltip>as well as the
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <a
                                    target="_blank"
                                    href="/user-privacy"
                                    @click.stop
                                    v-on="on"
                                >User Privacy</a>
                            </template>
                            Opens in new window
                        </v-tooltip>and
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <a
                                    target="_blank"
                                    href="/cookie-policy"
                                    @click.stop
                                    v-on="on"
                                >Cookie Policy</a>
                            </template>
                            Opens in new window
                        </v-tooltip>
                    </div>
                </template>
            </v-checkbox>

            <v-checkbox v-model="form.newsletter_check" color="primary" :disabled="loading">
                <span slot="label">
                    I had like to stay informed about news, events, updates, and
                    special offers on DEVILFISH
                </span>
            </v-checkbox>

            <v-card color="primary">Google Recaptcha</v-card>

            <v-btn
                large
                block
                class="px-12 mt-5"
                color="accent black--text"
                :loading="loading"
                :disabled="loading"
                @click="postRegister()"
            >Register</v-btn>
        </v-form>
    </div>
</template>

<script>
import inputRulesMixin from '@/mixins/inputRulesMixin'
import EmailVerificationAlert from '@/components/Auth/EmailVerificationAlert'

export default {
    components: { EmailVerificationAlert },
    mixins: [inputRulesMixin],
    data() {
        return {
            show_password: false,
            show_email_verification_alert: false,
            loading: false,
            form: {
                email: '',
                password: '',
                password_confirmation: '',
                tnc_check: false,
                newsletter_check: false
            },
            errors: {},
            registered_email: null
        }
    },

    computed: {
        passwordConfirmationRule() {
            return () =>
                this.form.password === this.form.password_confirmation ||
                'Passwords must be matched'
        }
    },

    methods: {
        postRegister() {
            // reset errors
            this.errors = {}
            // local validate form
            if (this.$refs.form.validate()) {
                this.loading = true
                this.$http
                    .post('/register', this.form)
                    .then((response) => {
                        const { registered_email } = response.data
                        this.registered_email = registered_email

                        this.show_email_verification_alert = true

                        // reset form
                        this.$refs.form.reset()

                        // close auth panel
                        // this.$eventBus.$emit('close_authPanel');
                    })
                    .catch((error) => {
                        // console.log(error.response.data.errors);
                        // set error

                        this.errors = error.response.data.errors
                        // pop snackbar
                        this.$eventBus.$emit('open_snackbar', {
                            message: 'Registration failed',
                            optionalArgs: { bgColor: 'error' }
                        })
                    })
                    .finally(() => {
                        this.loading = false
                    })
            }
        },
        resetForm() {
            this.form.email = ''
            this.form.password = ''
            this.form.password_confirmation = ''
            this.form.tnc_check = false
            this.form.newsletter_check = false
        }
    }
}
</script>

<style></style>
